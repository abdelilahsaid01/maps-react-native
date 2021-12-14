import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableWithoutFeedback,
  Platform,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

export default function Test() {
  const CatProps = (props) => {
    const [isHungry, setIsHungry] = useState(true);
    return (
      <View>
        <Text>Hello, {props.name}!</Text>
        <Button
          onPress={() => {
            setIsHungry(false);
          }}
          disabled={!isHungry}
          title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
        />
      </View>
    );
  };
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
        <TouchableWithoutFeedback onPress={() => alert("Pressed!")}>
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
            style={{ width: 200, height: 200 }}
          />
        </TouchableWithoutFeedback>
      </ImageBackground>
      <CatProps name="a good cat" />
      {/* <ActivityIndicator size="large" color="#00ff00" /> */}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    height: 500,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
