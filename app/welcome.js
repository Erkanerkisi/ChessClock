import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Platform,
  Text,
  Slider
} from "react-native";
import TimerTypes from "./timeTypes";
export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GridViewItems: [
        { key: "1 min game", min: 1, sec: 0 },
        { key: "3 min game", min: 3, sec: 0 },
        { key: "5 min game", min: 5, sec: 0 },
        { key: "7 min game", min: 7, sec: 0 },
        { key: "10 min game", min: 10, sec: 0 },
        { key: "15 min game", min: 15, sec: 0 }
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
      
      <View style={styles.MainContainer}>
        <Text style={styles.welcomeText}>Welcome ChessClock</Text>
        <Text style={styles.text}>Delay Time: {this.state.value}</Text>
        <Slider
          style = {styles.slider}
          step={1}
          maximumValue={20}
          value={this.state.value}
          onValueChange={(val)=> this.setState({value: val})}
        />
        <FlatList
          data={this.state.GridViewItems}
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
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  GridViewBlockStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 100,
    margin: 5,
    backgroundColor: "#05BC87"
  },
  GridViewInsideTextItemStyle: {
    color: "#fff",
    padding: 10,
    fontSize: 18,
    justifyContent: "center"
  },
  welcomeText: {
    color: "#0F2284",
    padding: 60,
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    justifyContent: "center",
    marginLeft:10
  },
  slider: {
    width: '100%',
    marginBottom: 25,
    justifyContent: "center",
    alignItems : "center"
  }
});