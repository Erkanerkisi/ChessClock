import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './app/main';
import Welcome from './app/welcome';
import { createStackNavigator, createAppContainer } from "react-navigation";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer style = {{backgroundColor : '#CBCBCB'}}/>;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main, 
    navigationOptions: {
        header: null
    },
},
  Welcome:{
    screen: Welcome, 
    navigationOptions: {
        header: null
    },
  }
},
{
  initialRouteName: "Welcome"
});

const AppContainer = createAppContainer(AppNavigator);
