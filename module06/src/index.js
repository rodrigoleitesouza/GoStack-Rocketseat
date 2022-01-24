import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "./config/ReactotronConfig";

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
  }
});

console.tron.log("Hello, World22!");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Apenas um teste!</Text>
      <Text style={styles.welcome}>Abaix4444o!</Text>
    </View>
  );
}

