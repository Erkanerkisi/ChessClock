import React, { Component } from 'react';
import { TouchableOpacity,Text } from 'react-native';

export default class timeTypes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', {
                time: this.props.time,
                delay : this.props.delay
            })}
            style={this.props.BlockStyle} >
                <Text style={this.props.TextStyle}>
                    {this.props.title}
                </Text>
            </TouchableOpacity >
        );
    }
}
