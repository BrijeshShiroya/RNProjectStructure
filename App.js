/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { Home, Profile } from './src/screens';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
      Profile: { screen: Profile },
    },
    {
      // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
  )
);
export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}
