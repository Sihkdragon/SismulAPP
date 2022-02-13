import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import qrcode from "../../image/qrcode.png";
const touchHandeler = (componentname) => {
  navigation.navigate(componentname);
};
const Navigation = ({ touchHandeler }) => {
  return (
    <View style={styles.navigationContainer}>
      <TouchableNativeFeedback onPress={touchHandeler}>
        <View style={styles.buttonNavigation}>
          <FontAwesome5
            name="list-alt"
            style={styles.menuIcon}
            size={36}
            color={"#22A6B3"}
          />
          <Text style={styles.menuText}>Absen Hari ini</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.buttonNavigationHomeCon}>
        <View style={styles.buttonNavigationHome}>
          <Image source={qrcode} style={styles.qrLogo} />
        </View>
      </View>
      <View style={styles.buttonNavigation}>
        <MaterialCommunityIcons
          name="format-list-text"
          style={styles.menuIcon}
          size={36}
          color={"#22A6B3"}
        />
        <Text style={styles.menuText1}>Seluruh Data Siswa</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    marginTop: 32,
    width: "100%",
    backgroundColor: "#22A6B3",
    height: "13%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
  },
  qrLogo: {
    width: 64,
    height: 64,
  },
  buttonNavigationHomeCon: {
    // flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonNavigationHome: {
    width: 122,
    // flex: 1,
    height: 122,
    borderWidth: 2,
    borderColor: "#22A6B3",
    backgroundColor: "#fff",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // top: -30,
    bottom: 14,
  },
  buttonNavigation: {
    height: "80%",
    width: "25%",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 10,
  },
  menuIcon: {
    textAlign: "center",
    borderRadius: 5,
  },
  menuText: {
    fontSize: 10,
    textAlign: "center",
    color: "#22A6B3",
  },
  menuText1: {
    fontSize: 8,
    textAlign: "center",
    color: "#22A6B3",
  },
});

export default Navigation;
