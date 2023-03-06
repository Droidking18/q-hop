import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import App from './App';
// import About from './About.js';

const Routes = () => (
  <Router>
    <Scene key="root">
      {/* <Scene key="home" component={Home} title="Home" initial={true} /> */}
      <Scene key="app" component={App} title="App" />
    </Scene>
  </Router>
);
export default Routes;
