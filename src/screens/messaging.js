import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import Firebase from "react-native-firebase";

  const fcm = Firebase.messaging()

export default class App extends Component {
  componentDidMount() {
    fcm.requestPermissions()
    const token = fcm.getToken()
    console.log(token)
    console.log("kbykby")
    alert(token)
    console.log(token)
    const topic = "clintal"
    // fcm.subscribeToTopic("lol")
    fcm.subscribeToTopic(topic)
    // アプリが開いているときに通知が送られるとonMessage from kbyと出る
    fcm.onMessage(() => alert("onMessage from kby"))
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>For FCM!!!</Text>
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
});