import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Navigation from "./Components/navigation";
import { Header } from "./Components/header";
import Lastdata from "./Components/lastdata";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import BASEURL from "../assets/baseurl";

const getCurrentDay = () => {
  const dayName = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const date = new Date();
  return dayName[date.getDay()];
};
const getCurrentDate = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return date + "/" + month + "/" + year; //format: dd-mm-yyyy;
};

const URL = BASEURL + "api/absenpost";
// const URL = "http://192.168.18.18:8000/api/absenpost";
const Home = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [nik, setNIK] = useState(null);
  const [DATA, SETDATA] = useState([]);
  // GetData Terakhir Absen
  const getData = async () => {
    try {
      const res = await axios.get(BASEURL + "homedata");
      SETDATA(res.data);
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };

  // Proses Kamera
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };
  const setAbsen = async (NIK) => {
    try {
      await fetch(URL, {
        method: "post",
        mode: "no-cors",
        headers: {
          nik: NIK,
        },
      });
      // setStatus("Berhasil Dikirim");
      alert("Siswa dengan NIS " + NIK + " Berhasil diabsen");
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  // Requst Izin Kamera
  useEffect(() => {
    getData();
    askForCameraPermission();
  }, []);
  // Scan NIK doing
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setNIK(data);
    setAbsen(data);
    console.log("Type: " + type + "\nData: " + data);
  };
  //Check izin
  let statusteks = "";
  if (hasPermission === null) {
    statusteks = "meminta perizinan kamera";
  }
  if (hasPermission === false) {
    statusteks = "tidak diberi akses kamera";
  }
  return (
    <View style={styles.homecontainer}>
      <Header title={"Home"} />
      <View style={styles.time}>
        <Text style={styles.timetext}>{getCurrentDay()}</Text>
        <Text style={styles.timetext}>{getCurrentDate()}</Text>
      </View>
      <View style={styles.camera}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 650, width: 365 }}
        />
      </View>
      <Text style={styles.barusajatext}>Baru saja diabsen :</Text>
      <Lastdata DATA={DATA} />
      {scanned && (
        <Button
          title={"Scan lagi?"}
          color={"#22A6B3"}
          onPress={() => setScanned(false)}
        />
      )}
      <Navigation />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  homecontainer: {
    height: "100%",
    paddingHorizontal: 26,
  },
  time: {
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 38,
  },
  timetext: {
    fontSize: 16,
    color: "#22A6B3",
    letterSpacing: 1,
  },
  camera: {
    marginTop: 24,
    width: "100%",
    height: "30%",
    borderWidth: 2,
    borderColor: "#22A6B3",
    overflow: "hidden",
  },
  barusajatext: {
    marginTop: 8,
    fontSize: 16,
    color: "#22A6B3",
    letterSpacing: 1,
  },
});
