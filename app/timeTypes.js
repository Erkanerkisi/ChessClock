import React, { Component } from 'react';
import {Button} from 'react-native';

export default class timeTypes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Button title={this.props.title}
                        onPress={() => this.props.navigation.navigate('Home',{
                            minute: this.props.minute,
                            second:this.props.second
                          })}
                />
        );
    }
}
