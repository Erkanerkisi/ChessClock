import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import CountDown from 'react-native-countdown-component';
import Timer from './timer';

export default class main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstTimerRunning: false,
            secondTimerRunning: false,
            min: 5,
            sec: 0
        };
    }

    render() {

        const { navigation } = this.props;
        const minute = navigation.getParam('minute', 'NO-ID');
        const second = navigation.getParam('second', 'some default value');

        return (
            <View style={{ flex: 1 }}>
                <Timer onPress={this.tickFirstTimer.bind(this)}
                    style={[styles.tabs, styles.rotate180, this.state.firstTimerRunning ? styles.active : styles.passive]}
                    until={60 * minute + second}
                    digitStyle={this.state.firstTimerRunning ? styles.active : styles.passive}
                    digitTxtStyle={this.state.firstTimerRunning ? styles.active : styles.passive}
                    running={this.state.firstTimerRunning}
                />
                <View style={styles.settings}>
                    <Text>Settings</Text>
                </View>
                <Timer onPress={this.tickSecondTimer.bind(this)}
                    style={[styles.tabs, this.state.secondTimerRunning ? styles.active : styles.passive]}
                    until={60 * minute + second}
                    digitStyle={this.state.secondTimerRunning ? styles.active : styles.passive}
                    digitTxtStyle={this.state.secondTimerRunning ? styles.active : styles.passive}
                    running={this.state.secondTimerRunning}
                />
            </View>
        );
    }

    tickFirstTimer() {
        this.setState({
            firstTimerRunning: false,
            secondTimerRunning: true
        })
    }

    tickSecondTimer() {
        this.setState({
            firstTimerRunning: true,
            secondTimerRunning: false
        })
    }
}


const styles = StyleSheet.create({
    tabs: {
        flex: 1
    },
    settings: {
        flex: 0.5,
        backgroundColor: '#444444',
        padding: 10
    },
    active: {
        color: '#FFFFFF',
        backgroundColor: '#FFA500',
        textAlign: 'center'
    },
    passive: {
        color: '#000000',
        backgroundColor: '#9C9C9C',
        textAlign: 'center'
    },
    rotate180: {
        transform: [{ rotate: '180deg' }]
    }

});