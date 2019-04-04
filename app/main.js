import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

export default class main extends Component{
    render(){
        return (
            <View style={{flex: 1, padding: 10}}>
              <View style={styles.text}>
                    <Text></Text>
              </View>
              <View style={styles.settings}>
                    <Text>Settings</Text>
            </View>
              <View style={styles.text2}>
                    <Text></Text>
            </View>
            </View>
          );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F31A1A',
  },
  text: {
    flex: 2,
    backgroundColor: '#F31A1A',
    borderRadius: 20,
    padding: 10
  },
  text2: {
    flex: 2,
    backgroundColor: '#49D265',
    borderRadius: 20,
    padding: 10
  },
  settings: {
    flex: 0.5,
    backgroundColor: '#013CFE',
    padding: 10
  }
});