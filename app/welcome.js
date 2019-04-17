import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class main extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Welcome</Text>
                <Button title="Start"
                        onPress={() => this.props.navigation.navigate('Home')}
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
  