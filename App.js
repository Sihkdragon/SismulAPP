import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Pages/home";
import Alldata from "./Pages/alldata";
import Todaydata from "./Pages/todaydata";
// import Navigator from "./Routes/mainStack";
export default function App() {
  const [loaded] = useFonts({
    notosans: require("./assets/fonts/NotoSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Navigator /> */}
        <Home />
        {/* <Alldata /> */}
        {/* <Todaydata /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
});
