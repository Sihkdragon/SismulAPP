import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        style={styles.menuIcon}
        size={26}
        color={"#22A6B3"}
      />
      <Text style={styles.Title}>{title}</Text>
      <MaterialIcons
        name="account-circle"
        style={styles.account}
        size={26}
        color={"#22A6B3"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 42,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    position: "absolute",
    left: 0,
  },
  Title: {
    color: "#22A6B3",
    fontSize: 18,
    fontFamily: "notosans",
    letterSpacing: 1,
  },
  account: {
    position: "absolute",
    right: 0,
  },
});
