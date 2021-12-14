import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Hello World</Text>
      </View>
      <View style={styles.login} />
      <View style={styles.register} />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  login: {
    width: "100%",
    height: 50,
    backgroundColor: "#fc5c65",
  },
  register: {
    width: "100%",
    height: 50,
    backgroundColor: "#61FF33",
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});
export default WelcomeScreen;
