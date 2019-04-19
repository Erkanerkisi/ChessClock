import React, { Component } from 'react';
import {View,TouchableWithoutFeedback} from 'react-native';
import CountDown from 'react-native-countdown-component';


export default class timer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                    <View style={this.props.style}>
                        <CountDown
                            until={this.props.until}
                            size={100}
                            digitStyle={this.props.digitStyle}
                            digitTxtStyle={this.props.digitTxtStyle}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: '', s: '' }}
                            running={this.props.running}
                        />
                    </View>
                </TouchableWithoutFeedback>
        );
    }
}

  