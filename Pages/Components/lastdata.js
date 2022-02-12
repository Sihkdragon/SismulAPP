import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import React, { Component } from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    nisn: "10111111",
    nama: "Ditotisi",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    nisn: "28123017",
    nama: "Igit",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    nisn: "90750497",
    nama: "Ditotisi",
  },
];

const Item = ({ nisn, nama }) => (
  <View style={styles.item}>
    <View style={styles.datacontainer1}>
      <Text style={styles.data}>{nisn}</Text>
    </View>
    <View style={styles.datacontainer2}>
      <Text style={styles.data}>{nama}</Text>
    </View>
  </View>
);

const Lastdata = () => {
  const renderItem = ({ item }) => <Item nisn={item.nisn} nama={item.nama} />;
  return (
    <View style={styles.lastContainer}>
      <View style={styles.tableheadercontainer}>
        <Text style={styles.tableheader}>NISN</Text>
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
