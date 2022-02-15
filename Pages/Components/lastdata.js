import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://192.168.18.18:8000/homedata";

const Item = ({ siswa_id, nama }) => (
  <View style={styles.item}>
    <View style={styles.datacontainer1}>
      <Text style={styles.data}>{siswa_id}</Text>
    </View>
    <View style={styles.datacontainer2}>
      <Text style={styles.data}>{nama}</Text>
    </View>
  </View>
);

const Lastdata = () => {
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
    <View style={styles.lastContainer}>
      <View style={styles.tableheadercontainer}>
        <Text style={styles.tableheader}>NIK</Text>
        <Text style={styles.tableheader}>Nama Lengkap</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  lastContainer: {
    marginVertical: 8,
    width: "100%",
    height: "20%",
    borderWidth: 4,
    borderColor: "#22A6B3",
    borderRadius: 5,
  },
  tableheadercontainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableheader: {
    fontSize: 16,
    color: "#22A6B3",
  },
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
  },
  datacontainer1: {
    borderBottomColor: "#3E3E3E",
    borderBottomWidth: 1,
    width: "35%",
  },
  datacontainer2: {
    borderBottomColor: "#3E3E3E",
    borderBottomWidth: 1,
    width: "50%",
  },
  data: {
    fontSize: 16,
    color: "#22A6B3",
  },
});
export default Lastdata;
