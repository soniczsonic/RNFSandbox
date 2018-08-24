import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import Firebase from "react-native-firebase";

const analytics = Firebase.analytics()

export default class App extends Component {
  componentDidMount() {
    analytics.setAnalyticsCollectionEnabled(true);
    analytics.setCurrentScreen("home");
    // 以下のtestはコンソールで測定できた。
    analytics.logEvent("test", { test: "test" });
    analytics.setUserId("kby");
    analytics.setUserProperty("deepuser", "spendonehour")
  }

  onPress = () => {
    analytics.logEvent("pressedHomeButton");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="home" onPress={this.onPress()} style={styles.welcome} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
