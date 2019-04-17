import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './app/main';
import Welcome from './app/welcome';
import { createStackNavigator, createAppContainer } from "react-navigation";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

