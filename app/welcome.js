import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TimerTypes from './timeTypes';
export default class welcome extends Component {
    render() {
        return (
                <View style = {styles.container}>
                
                    <Text>Welcome</Text>
                    <TimerTypes
                    navigation = {this.props.navigation}
                    title = 'Blitz'
                    minute = {7}
                    second = {45}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });
  