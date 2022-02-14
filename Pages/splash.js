import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Logo from "../image/logo.png";
import { useNavigation } from "@react-navigation/native";
const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("Login");
  }, 3000);
  return (
    <View style={styles.SplashContainer}>
      <View>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.bigTitle}>
          Tarbiyatul Mubtadiin Student Attendance
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SplashContainer: {
    backgroundColor: "#22A6B3",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 98,
    height: 98,
    alignSelf: "center",
    marginTop: 98,
    marginBottom: 20,
  },
  bigTitle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default Splash;
