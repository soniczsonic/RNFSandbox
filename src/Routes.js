import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import messaging from "./screens/messaging";
import home from "./screens/home";
import analytics from "./screens/analytics";
import remote from "./screens/remote";

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
            <Scene key="messaging" initial component={messaging} />
            <Scene key="home" component={home} />
            <Scene key="analytics" component={analytics} />
            <Scene key="remote" component={remote} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
