import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Apenas um teste!</Text>
      <Text style={styles.welcome}>Abaixo!</Text>
    </View>
  );
}

