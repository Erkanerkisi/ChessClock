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

const time = 180
const delay = 0

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main, 
    params: { time: time,delay: delay },
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
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);
