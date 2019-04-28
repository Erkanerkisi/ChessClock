import React, { Component } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import CountDown from "react-native-countdown-component";

export default class timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableWithoutFeedback onPress={this.props.onPress}>
            <View style={[this.props.style]}>
                <CountDown
                    style = {this.props.componentStyle}
                    until={this.props.until}
                    size={80}
                    digitStyle={this.props.digitStyle}
                    digitTxtStyle={this.props.digitTxtStyle}
                    timeToShow={["M", "S"]}
                    timeLabels={{ m: "", s: "" }}
                    running={this.props.running}
                    onChange={this.props.onChange}
                    showSeparator
                    separatorStyle = {this.props.separatorStyle}
                />
            </View>
      </TouchableWithoutFeedback>
    );
  }
}
