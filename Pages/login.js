import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TextInput, Button } from "react-native";
import Logo from "../image/logo.png";
import { useNavigation } from "@react-navigation/native";
import PasswordInputText from "react-native-hide-show-password-input";
import { YellowBox } from "react-native";
// import { YellowBox } from "react-native";
import { LogBox } from "react-native";
// YellowBox.ignoreWarnings([
//   "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
// ]);
// LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    if (username === "Admin" && password === "Admin") {
      navigation.push("Home");
    }
  };
  // useEffect(() => {
  //   LogBox.ignoreWarnings([
  //     "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  //   ]);
  // }, []);
  return (
    <View style={styles.Login}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.bigTitle}>
        Tarbiyatul Mubtadiin Student Attendance
      </Text>
      <Text style={styles.inputText}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <Text style={styles.inputText} secureTextEntry={true}>
        Password
      </Text>
      <PasswordInputText
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        label={""}
        iconSize={20}
      />
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
    marginBottom: 8,
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
