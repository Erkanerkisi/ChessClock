import React, { Component } from 'react';
import { Button, TouchableOpacity,Text } from 'react-native';

export default class timeTypes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', {
                minute: this.props.minute,
                second: this.props.second
            })}
            style={this.props.BlockStyle} >
                <Text style={this.props.TextStyle}>
                    {this.props.title}
                </Text>
            </TouchableOpacity >
        );
    }
}
