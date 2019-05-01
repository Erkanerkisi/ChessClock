import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Dialog from "react-native-dialog";
import { SegmentedControls } from "react-native-radio-buttons";
import TimePicker from "react-native-simple-time-picker";
import { AppStyles as styles } from "./AppStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Delay",
      selectedMinutes: 0,
      selectedSeconds: 0,
      dialogTimeVisible: false
    };
  }

  selectTime = () => {
    this.setState({ dialogTimeVisible: true });
  };
  updateTime = (min, sec) => {
    this.setState({ selectedMinutes: min, selectedSeconds: sec });
  };
  closeDialogBox = () => {
    this.setState({ dialogTimeVisible: false });
  };

  render() {
    const types = ["Delay", "Bronstein", "Fischer"];
    const { selectedMinutes, selectedSeconds } = this.state;
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
                <TouchableOpacity onPress={this.selectTime.bind(this)}>
                    <Text>
                    Value: {this.state.selectedMinutes} : {this.state.selectedSeconds}
                    </Text>
                </TouchableOpacity>
                <Dialog.Container visible={this.state.dialogTimeVisible}>
                    <Dialog.Title>Time Picker</Dialog.Title>
                    <TimePicker
                    selectedHours={selectedMinutes}
                    selectedMinutes={selectedSeconds}
                    onChange={this.updateTime}
                    />
                    <Dialog.Button label="OK" onPress={this.closeDialogBox} />
                </Dialog.Container>
        <Dialog.Button label="Cancel" onPress={this.props.handleCancel} />
        <Dialog.Button label="Delete" onPress={this.props.handleDelete} />
      </Dialog.Container>
    );
  }
}
