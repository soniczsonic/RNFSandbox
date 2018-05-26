import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import home from "./screens/home";
import analytics from "./screens/analytics";

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            gestureEnabled={false}
            tabs
            activeBackgroundColor="#ddd"
            initial
          >
            <Scene key="home" initial component={home} />
            <Scene key="analytics" component={analytics} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
