import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Apenas um teste!</Text>
        <Text style={styles.welcome}>Abaixo!</Text>
      </View>
    );
  }
}

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