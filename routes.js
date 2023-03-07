import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Journeys:
import Home from './ui/Home';
import Display from './ui/Display';
import Capture from './ui/Capture';

const Tab = createBottomTabNavigator();

const Routes = () => (
  <Tab.Navigator>
    <Tab.Screen key="home" name="Home" component={Home} />
    <Tab.Screen key="display " name="Display" component={Display} />
    <Tab.Screen key="capture" name="Capture" component={Capture} />
  </Tab.Navigator>
);
export default Routes;
