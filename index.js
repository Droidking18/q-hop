/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes.js';

const app = () => <NavigationContainer>{Routes()}</NavigationContainer>;

export default app;
AppRegistry.registerComponent(appName, () => app);
