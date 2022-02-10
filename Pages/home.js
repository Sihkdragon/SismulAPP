import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./Components/header";
import Lastdata from "./Components/lastdata";
const Home = () => {
  return (
    <View style={styles.homecontainer}>
      <Header />
      <View style={styles.time}>
        <Text style={styles.timetext}>Rabu</Text>
        <Text style={styles.timetext}>02/02/2022</Text>
      </View>
      <View style={styles.camera}></View>
      <Text style={styles.barusajatext}>Baru saja diabsen :</Text>
      <Lastdata />
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
    marginTop: 64,
  },
  timetext: {
    fontSize: 16,
    fontFamily: "noto-sans",
    color: "#22A6B3",
    letterSpacing: 1,
  },
  camera: {
    marginTop: 24,
    width: "100%",
    height: "35%",
    borderWidth: 2,
    borderColor: "#22A6B3",
  },
  barusajatext: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "noto-sans",
    color: "#22A6B3",
    letterSpacing: 1,
  },
});
