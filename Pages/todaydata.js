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
const baseUrl = "http://192.168.18.18:8000/todaydata";

const Item = ({ siswa_id, nama }) => (
  <View style={styles.tableContentContainer}>
    <View style={styles.tableContent}>
      <Text style={styles.tableContentName}>{siswa_id}</Text>
    </View>
    <View style={styles.tableContent2}>
      <Text style={styles.tableContentName}>{nama}</Text>
    </View>
  </View>
);

const TodayData = () => {
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
    <Item siswa_id={item.siswa_id} nama={item.nama} />
  );
  return (
    <View style={styles.allContainer}>
      <Header title={"Today Attendance"} />
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
            <Text style={styles.tableHeaderName}>siswa_id</Text>
          </View>
          <View style={styles.tableHeader2}>
            <Text style={styles.tableHeaderName}>Nama</Text>
          </View>
        </View>
        <SafeAreaView style={styles.tablecontent}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.siswa_id}
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
    paddingHorizontal: 8,
    height: 40,
  },
  tableHeader: {
    justifyContent: "center",
    flex: 1,
  },
  tableHeader2: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 1.2,
  },
  tableHeaderName: {
    color: "#22A6B3",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 12,
  },
  tableContentContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    height: 40,
  },
  tableContent: {
    marginRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#16717A",
    flexDirection: "row",
    alignItems: "center",
    flex: 1.2,
  },
  tableContent2: {
    marginLeft: 8,
    borderBottomWidth: 1,
    borderColor: "#16717A",
    flexDirection: "row",
    alignItems: "center",
    flex: 1.75,
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

export default TodayData;
