/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Routes from './routes.js';

const Stack = createNativeStackNavigator();

const app = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default app;
AppRegistry.registerComponent(appName, () => app);
