import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import firebase from 'react-native-firebase';

export default class App extends Component<Props> {

  componentDidMount() {
    firebase.analytics().setAnalyticsCollectionEnabled(true);
    firebase.analytics().setCurrentScreen('home');
<<<<<<< HEAD
    // 以下のtestはコンソールで測定できた。
=======
>>>>>>> 2f39a1c... changed
    firebase.analytics().logEvent('test', {test: 'test'});
    firebase.analytics().setUserId('id');
  }

<<<<<<< HEAD
  onPress = () => {
    firebase.analytics().logEvent('pressedHomeButton')
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title='home' onPress={this.onPress()} style={styles.welcome} />
=======
  render() {
    return (
      <View style={styles.container}>
        <Button title='home' onPress={firebase.analytics().setUserId('1')} style={styles.welcome} />
>>>>>>> 2f39a1c... changed
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
