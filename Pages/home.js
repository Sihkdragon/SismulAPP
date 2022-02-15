import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Navigation from "./Components/navigation";
import { Header } from "./Components/header";
import Lastdata from "./Components/lastdata";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
const baseUrl = "http://192.168.41.39:8000/absen";
const Home = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [nik, setNIK] = useState(null);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };
  const setAbsen = () => {
    console.log("telah di scan");
  };
  // Requst Izin Kamera
  useEffect(() => {
    askForCameraPermission();
    !nik === null && setAbsen();
  }, [nik]);
  // Scan NIK doing
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setNIK(data);
    // async () => {
    //   try {
    //     const res = await axios.get(baseUrl, {
    //       headers: {
    //         nik: nik,
    //       },
    //     });
    //     alert("Scan Berhasil");
    //   } catch (error) {
    //     alert(error);
    //   }
    // };
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
        <Text style={styles.timetext}>Rabu</Text>
        <Text style={styles.timetext}>02/02/2022</Text>
      </View>
      <View style={styles.camera}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 650, width: 365 }}
        />
      </View>
      <Text>{nik}</Text>
      <Text style={styles.barusajatext}>Baru saja diabsen :</Text>
      <Lastdata />
      {scanned && (
          <Button
            title={"Scan lagi?"}
            color={"#22A6B3"}
            onPress={() => setScanned(false)}
          />
        ) &&
        setNIK("silahkan scan ulang")}
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
