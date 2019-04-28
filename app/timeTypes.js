import React, { Component } from 'react';
import { TouchableOpacity,Text } from 'react-native';

export default class timeTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay : props.delay
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ delay: nextProps.delay });  
      }

    render() {
        console.log("delay timetypes -> " + this.state.delay);
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', {
                time: this.props.time,
                delay : this.state.delay
            })}
            style={this.props.BlockStyle} >
                <Text style={this.props.TextStyle}>
                    {this.props.title}
                </Text>
            </TouchableOpacity >
        );
    }
}
