import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import CountDown from 'react-native-countdown-component';

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
        return (
            <View >
                <TouchableWithoutFeedback onPress={this.tickFirstTimer.bind(this)}>
                    <View style={[styles.tabs, styles.rotate180, this.state.firstTimerRunning ? styles.active : styles.passive]}>
                        <CountDown
                            until={60 * this.state.min + this.state.sec}
                            size={100}
                            digitStyle={this.state.firstTimerRunning ? styles.active : styles.passive}
                            digitTxtStyle={this.state.firstTimerRunning ? styles.active : styles.passive}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: '', s: '' }}
                            running={this.state.firstTimerRunning}

                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.settings}>
                    <Text>Settings</Text>
                </View>
                <TouchableWithoutFeedback onPress={this.tickSecondTimer.bind(this)}>
                    <View style={[styles.tabs, this.state.secondTimerRunning ? styles.active : styles.passive]}>
                        <CountDown
                            until={60 * this.state.min + this.state.sec}
                            size={100}
                            digitStyle={this.state.secondTimerRunning ? styles.active : styles.passive}
                            digitTxtStyle={this.state.secondTimerRunning ? styles.active : styles.passive}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: '', s: '' }}
                            running={this.state.secondTimerRunning}

                        />
                    </View>
                </TouchableWithoutFeedback>
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