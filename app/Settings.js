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
    var minutes = 3;
    console.log(minutes);
    this.state = {
      type: this.props.timeType,
      selectedMinutes: minutes,
      dialogTimeVisible: false,
      value: this.props.value
    };
  }

  render() {
    this.handleSet = this.props.handleSet.bind(
      this,
      this.state.type,
      this.state.selectedMinutes,
      this.state.value
    );

    const types = ["Simple", "Delay", "Bronstein", "Fischer"];
    const timingTypes = [1, 3, 5, 10, 15];

    const {
      selectedMinutes,
      value
    } = this.state;

    return (
      <Dialog.Container visible={this.props.dialogVisible}>
        <Dialog.Title>Settings</Dialog.Title>
        <Text style={styles.timeDesc}>
          Clock type
        </Text>
        <SegmentedControls
          options={types}
          onSelection={selectedOption =>
            this.setState({ type: selectedOption })
          }
          selectedOption={this.state.type}
        />
        <Text style={styles.timeDesc}>
          Time Per Player
        </Text>
        <SegmentedControls
          options={timingTypes}
          onSelection={selectedOption =>
            this.setState({ selectedMinutes: selectedOption })
          }
          selectedOption={this.state.selectedMinutes}
        />

        <Text style={styles.timeDesc}>Increment/Delay : {value} s</Text>

        <View style={[styles.centered, styles.timeButton]}>
          <View style={{ flex: 0.6, alignItems: "center" }}>
            <Text style={styles.timeTitle}>VALUE :</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TimePicker
              selectedSeconds={this.state.value}
              onChange={(seconds) =>
                this.setState({
                  value: seconds
                })
              }
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
