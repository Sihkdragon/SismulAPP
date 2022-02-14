import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, Button } from "react-native";
import Logo from "../image/logo.png";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    if (username === "admin" && password === "admin") {
      navigation.push("Home");
    }
  };
  return (
    <View style={styles.Login}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.bigTitle}>
        Tarbiyatul Mubtadiin Student Attendance
      </Text>
      <Text style={styles.inputText}>Username</Text>
      <TextInput style={styles.input} onChangeText={setUsername} />
      <Text style={styles.inputText}>Password</Text>
      <TextInput style={styles.input} onChangeText={setPassword} />
      <Button title={"masuk"} color="#22A6B3" onPress={loginHandler} />
      <Text style={styles.TextContainer}>
        <Text style={styles.TextLink}>Belum punya akun?</Text> {"\n"}Hubungi
        Bagian Tata usaha{"\n"}
        untuk Mendapatkan Akun.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Login: {
    paddingHorizontal: 80,
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
    color: "#22A6B3",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 65,
  },
  inputText: {
    color: "#22A6B3",
    fontSize: 16,
  },
  input: {
    borderBottomColor: "#16717A",
    borderBottomWidth: 1,
    marginBottom: 16,
  },

  TextContainer: {
    marginTop: 48,
    textAlign: "center",
    color: "#16717A",
  },
  TextLink: {
    textDecorationLine: "underline",
    opacity: 1,
  },
});

export default Login;
