import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTimerRunning: false,
      secondTimerRunning: false,
      isPaused:false
    };
    let activeSide =''
  }

  render() {
    const { navigation } = this.props;
    const minute = navigation.getParam("minute", "NO-ID");
    const second = navigation.getParam("second", "some default value");

    return (
      <View style={{ flex: 1 }}>
        <Timer
          onPress={this.tickFirstTimer.bind(this)}
          componentStyle={styles.rotate180}
          style={[
            styles.tabs,
            this.state.firstTimerRunning ? styles.active : styles.passive
          ]}
          until={second + 60 * minute }
          digitStyle={Object.assign(
            {},
            this.state.firstTimerRunning ? styles.active : styles.passive
          )}
          digitTxtStyle={ 
            this.state.firstTimerRunning ? styles.active : styles.passive
          }
          running={this.state.firstTimerRunning}
        />
        <View style={styles.settings}>
            <View style={[styles.center]}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                <Icon name="home" size={50} />
              </TouchableOpacity>
            </View>
            <View style={[styles.center]} >
              <TouchableOpacity onPress = {this.state.isPaused ? this.doPlay.bind(this) : this.doPause.bind(this)}>
                <Icon name={this.state.isPaused ? "play": "pause"} size={50} />
              </TouchableOpacity>
            </View>
          
        </View>
        <Timer
          onPress={this.tickSecondTimer.bind(this)}
          style={[
            styles.tabs,
            this.state.secondTimerRunning ? styles.active : styles.passive
          ]}
          until={60 * minute + second}
          digitStyle={
            this.state.secondTimerRunning ? styles.active : styles.passive
          }
          digitTxtStyle={
            this.state.secondTimerRunning ? styles.active : styles.passive
          }
          running={this.state.secondTimerRunning}
        />
      </View>
    );
  }

  tickFirstTimer() {
    this.setState({
      firstTimerRunning: false,
      secondTimerRunning: true
    });
  }

  tickSecondTimer() {
    this.setState({
      firstTimerRunning: true,
      secondTimerRunning: false
    });
  }
  doPause(){
      if(this.state.firstTimerRunning || this.state.secondTimerRunning){
        this.activeSide = this.state.firstTimerRunning ? 'first' : 'second'
        this.setState({
            firstTimerRunning: false,
            secondTimerRunning: false,
            isPaused:true
          });
      }
  }
  doPlay(){
    if(!this.state.firstTimerRunning && !this.state.secondTimerRunning){
        if(this.activeSide === "first")
            this.setState({firstTimerRunning: true,isPaused:false});
        else
        this.setState({secondTimerRunning: true,isPaused:false});
      }
  }
}

const styles = StyleSheet.create({
  tabs: {
    flex: 1
  },
  settings: {
    flex: 0.2,
    backgroundColor: "#444444",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },
  active: {
    color: "#000000",
    backgroundColor: "#0080FF",
    textAlign: "center",
    justifyContent: "center"
  },
  passive: {
    color: "#000000",
    backgroundColor: "#9C9C9C",
    textAlign: "center",
    justifyContent: "center"
  },
  rotate180: {
    transform: [{ rotate: "180deg" }]
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});
