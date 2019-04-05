import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class main extends Component {
    render() {
        return (
            <View style={{flex: 1, padding: 10}}>
                <View style={[{ flex: 1, backgroundColor: '#808080', borderRadius: 20 }]}>
                    <View style={styles.text}>
                        <Text style={{fontSize: 90}}>Erkan</Text>
                    </View>
                </View>

                <View style={styles.settings}>
                    <Text>Settings</Text>
                </View>



                <View style={[{ flex: 1, backgroundColor: '#808080', borderRadius: 20 }]}>
                    <View style={styles.text}>
                        <Text>Erkan</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
        display: 'flex'
    },
    text: {
        flex: 2,
        backgroundColor: '#808080',
        borderRadius: 20,
        padding: 10,
        margin: 10,

    },
    text2: {
        flex: 2,
        backgroundColor: '#49D265',
        padding: 10,
        borderRadius: 20,
        margin: 10
    },
    settings: {
        flex: 0.5,
        backgroundColor: '#013CFE',
        padding: 10
    }
});