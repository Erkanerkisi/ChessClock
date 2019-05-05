import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Dialog from "react-native-dialog";
import { SegmentedControls } from "react-native-radio-buttons";
import { AppStyles as styles } from "./AppStyles";
import TimePicker from "./TimePicker";

export default class settings extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.time);
    var hours   = Math.floor(this.props.time / 3600);
    var minutes = Math.floor((this.props.time - (hours * 3600)) / 60);
    var seconds = this.props.time - (hours * 3600) - (minutes * 60);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    this.state = {
      type: this.props.timeType,
      selectedHours: hours,
      selectedMinutes: minutes,
      selectedSeconds: seconds,
      dialogTimeVisible: false,
      value: this.props.value
    };
  }

  render() {
    this.handleSet = this.props.handleSet.bind(
      this,
      this.state.type,
      this.state.selectedHours,
      this.state.selectedMinutes,
      this.state.selectedSeconds,
      this.state.value
    );
    const types = ["Delay", "Bronstein", "Fischer"];
    const {
      selectedHours,
      selectedMinutes,
      selectedSeconds,
      value
    } = this.state;
    return (
      <Dialog.Container visible={this.props.dialogVisible}>
        <Dialog.Title>Settings</Dialog.Title>
        <SegmentedControls
          options={types}
          onSelection={selectedOption =>
            this.setState({ type: selectedOption })
          }
          selectedOption={this.state.type}
        />
        <Text style={styles.timeDesc}>
          Time Per Player : {selectedHours} h:{selectedMinutes} m:
          {selectedSeconds} s
        </Text>
        <View style={[styles.centered, styles.timeButton]}>
          <View style={{ flex: 0.6, alignItems: "center" }}>
            <Text style={styles.timeTitle}>VALUE :</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TimePicker
              selectedHours={selectedHours}
              selectedMinutes={selectedMinutes}
              onChange={(hours, minutes, seconds) =>
                this.setState({
                  selectedHours: hours,
                  selectedMinutes: minutes,
                  selectedSeconds: seconds
                })
              }
            />
          </View>
        </View>

        <Text style={styles.timeDesc}>Increment/Delay : {value} s</Text>

        <View style={[styles.centered, styles.timeButton]}>
          <View style={{ flex: 0.6, alignItems: "center" }}>
            <Text style={styles.timeTitle}>VALUE :</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TimePicker
              selectedHours={selectedHours}
              selectedMinutes={selectedMinutes}
              selectedSeconds={this.state.value}
              onChange={(hours, minutes, seconds) =>
                this.setState({
                  value: seconds
                })
              }
              hoursUnit=" h"
              minutesUnit=" m"
              secondsUnit=" s"
              hourVisible={false}
              minuteVisible={false}
            />
          </View>
        </View>
        <Dialog.Button label="Cancel" onPress={this.props.handleCancel} />
        <Dialog.Button label="Set" onPress={this.handleSet} />
      </Dialog.Container>
    );
  }
}
