import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
  FlatList,
} from "react-native";

const Index = ({ navigation, route }) => {
  const data = route.params.name;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>You are {data}</Text>
      <Button
        title="Go to AuthScreen"
        onPress={() => navigation.navigate("AuthScreen")}
      />

      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Simple />
    </View>
  );
};


const Simple = () => {
  const [count, setCount] = useState(0);
  const countriesData = [{ "name": "Afghanistan", "email": "hhhhhhhhh" }, { "name": "Åland Islands", "email": "yyyyyyy" }]

  return (
    <View style={{ marginTop: 50 }}>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me here!"
      />
      <Text>You clicked {count} times</Text>
      <FlatList
        data={countriesData}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <Text>Nama : {item.name} Email: {item.email}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default Index;
