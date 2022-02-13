import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import Navigation from "./Components/navigation";
import { Header } from "./Components/header";
import { MaterialIcons } from "@expo/vector-icons";

const DATA = [
  // {
  //   nisn: "1011818181",
  //   nama: "Ditotisi Rasyid Sumpena",
  //   latestabsen: "22/02/2022",
  // },
  {
    nisn: "1011818112",
    nama: "Ida Yani Agustria",
    latestabsen: "22/02/2022",
  },
  {
    nisn: "10118141481",
    nama: "Aprilia Siti Shopia",
    latestabsen: "22/02/2022",
  },
];

const Item = ({ nisn, nama, latestabsen }) => (
  <View style={styles.tableContentContainer}>
    <View style={styles.tableContent}>
      <Text style={styles.tableContentName}>{nisn}</Text>
    </View>
    <View style={styles.tableContent2}>
      <Text style={styles.tableContentName}>{nama}</Text>
    </View>
    <View style={styles.tableContent}>
      <Text style={styles.tableContentName}>{latestabsen}</Text>
    </View>
  </View>
);

const Alldata = ({ route, navigation }) => {
  console.log(route);
  const renderItem = ({ item }) => (
    <Item nisn={item.nisn} nama={item.nama} latestabsen={item.latestabsen} />
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
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderName}>Terakhir Absen</Text>
          </View>
        </View>
        <SafeAreaView style={styles.tablecontent}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.nisn}
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
