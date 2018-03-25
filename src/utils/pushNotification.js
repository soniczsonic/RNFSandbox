// @flow
import { Component } from 'react';
import { Platform } from 'react-native';
import firebase from 'react-native-firebase';

export default class PushNotification extends Component {
  componentDidMount() {
    const Fcm = firebase.messaging()
    firebase.analytics().setCurrentScreen('home');

    Fcm.requestPermissions();
    Fcm.getToken().then((token) => {
      alert(token);
      console.log(token);
    });
  }

  render() {
    return null;
  }
}
