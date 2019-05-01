import React, { Component } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Dialog from "react-native-dialog";


export default class settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog.Container visible={this.props.dialogVisible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={this.props.handleCancel} />
        <Dialog.Button label="Delete" onPress={this.props.handleDelete} />
      </Dialog.Container>
    );
  }
}
