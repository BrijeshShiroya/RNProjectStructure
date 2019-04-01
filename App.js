/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
} from 'react-navigation';
import { Home, Profile } from './src/screens';



const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
      Profile: { screen: Profile },
    },
    {
      headerMode: 'none',
      // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
  )
);
export default class App extends Component {
  render() {
    return <AppNavigator />
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

