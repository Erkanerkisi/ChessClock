import React, { Component } from "react";
import {
  View,
  FlatList,
  Alert,
  Platform,
  Text,
  Slider
} from "react-native";
import TimerTypes from "./timeTypes";
import {AppStyles as styles} from "./AppStyles";
export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GridViewItems: [
        { key: "1 min", min: 1, sec: 0 },
        { key: "3 min", min: 3, sec: 0 },
        { key: "5 min", min: 5, sec: 0 },
        { key: "7 min", min: 7, sec: 0 },
        { key: "10 min", min: 10, sec: 0 },
        { key: "15 min", min: 15, sec: 0 }
      ],
      value : 0
    };
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }

  change(value) {
    console.log("change value -> " + value );
    this.setState({
      value: value
  })}

  render() {
    console.log("delay -> " + this.state.value);
    return (
      
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome ChessClock</Text>
        <Text style={styles.text}>Delay second per player : {this.state.value}</Text>
        <Slider
          style = {styles.slider}
          step={1}
          maximumValue={20}
          value={this.state.value}
          onValueChange={(val)=> this.setState({value: val})}
        />
        <FlatList
          data={this.state.GridViewItems}
          extraData={this.state}
          renderItem={({ item }) => (
            <TimerTypes
              navigation={this.props.navigation}
              BlockStyle={styles.GridViewBlockStyle}
              TextStyle={styles.GridViewInsideTextItemStyle}
              title={item.key}
              time={item.min * 60 + item.sec}
              delay = {this.state.value}
            />
          )}
          numColumns={2}
        />
      </View>
    );
  }
};