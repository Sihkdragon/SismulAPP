import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Navigation from "./Components/navigation";
import { Header } from "./Components/header";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
const baseUrl = "http://192.168.41.39:8000/alldata";

const Item = ({ nik, nama, latestabsen }) => (
  <View style={styles.tableContentContainer}>
    <View style={styles.tableContent}>
      <Text style={styles.tableContentName}>{nik}</Text>
    </View>
    <View style={styles.tableContent2}>
      <Text style={styles.tableContentName}>{nama}</Text>
    </View>
    <View style={styles.tableContent3}>
      <Text style={styles.tableContentName}>{latestabsen}</Text>
    </View>
  </View>
);
const Alldata = () => {
  const [DATA, SETDATA] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(baseUrl);
      SETDATA(res.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const renderItem = ({ item }) => (
    <Item nik={item.nik} nama={item.nama} latestabsen={item.last_diabsen} />
  );
  return (
    <View style={styles.allContainer}>
      <Header title={"Student Data"} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Cari Data..."
          placeholderTextColor="#22A6B3"
          style={styles.textinput}
        />
        <View>
          <MaterialIcons
            name="search"
            style={styles.account}
            size={26}
            color={"#22A6B3"}
          />
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeaderContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderName}>NISN</Text>
          </View>
          <View style={styles.tableHeader2}>
            <Text style={styles.tableHeaderName}>Nama</Text>
          </View>
          <View style={styles.tableHeader3}>
            <Text style={styles.tableHeaderName}>Terakhir Absen</Text>
          </View>
        </View>
        <SafeAreaView style={styles.tablecontent}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.nik}
          />
        </SafeAreaView>
      </View>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  allContainer: {
    paddingHorizontal: 26,
    height: "100%",
  },
  inputContainer: {
    marginTop: 38,
    borderWidth: 1,
    borderColor: "#22A6B3",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textinput: {
    color: "#22A6B3",
  },
  tableContainer: {
    marginTop: 24,
    borderColor: "#16717A",
    borderWidth: 1,
    width: "100%",
    height: 400,
  },
  tableHeaderContainer: {
    flexDirection: "row",
    height: 40,
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#16717A",
    justifyContent: "center",
    flex: 1,
  },
  tableHeader3: {
    borderBottomWidth: 1,
    borderBottomColor: "#16717A",
    justifyContent: "center",
    flex: 0.7,
  },
  tableHeader2: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#16717A",
    justifyContent: "center",
    flex: 1.1,
  },
  tableHeaderName: {
    color: "#22A6B3",
    textAlign: "center",
    fontSize: 12,
  },
  tableContentContainer: {
    flexDirection: "row",
    height: 40,
  },
  tableContent: {
    borderBottomWidth: 1,
    borderBottomColor: "#16717A",
    justifyContent: "center",
    flex: 1,
  },
  tableContent3: {
    borderBottomWidth: 1,
    borderBottomColor: "#16717A",
    justifyContent: "center",
    flex: 0.7,
  },
  tableContent2: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#16717A",
    justifyContent: "center",
    flex: 1.1,
  },
  tableContentName: {
    color: "#22A6B3",
    textAlign: "center",
    fontSize: 10,
  },
  tablecontent: {
    flex: 1,
  },
});

export default Alldata;
