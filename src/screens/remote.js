import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import firebase from "react-native-firebase";

// import remoteConfigDefaults from "./constant/remote_config_defaults";

const config = firebase.config();

export default class App extends Component {
  state = {
    kbyos: "OS!!!"
  };

  componentDidMount() {
    config.enableDeveloperMode();
    // Set default values
    config.setDefaults({
      kbyos: "kbyoskby"
    });

    this.getRemoteValues();
  }

  getRemoteValues = () => {
    const keys = ["kbyos"];
    config
      .fetch(0)
      .then(() => config.activateFetched())
      .then(activated => {
        if (!activated) console.log("Fetched data not activated");
        return config.getValues(keys);
      })
      .then(datas => {
        const kbyos = datas.kbyos.val();

        this.setState({
          kbyos
        });
      })
      .catch(error => console.log("err : ", error));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.kbyos}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderWidth: 1
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 20
  },
  picture: {
    height: 250,
    width: 250,
    marginVertical: 20
  },
  button: {
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    padding: 10,
    borderRadius: 10
  },
  buttonTitle: {
    color: "white",
    fontSize: 18
  }
});
