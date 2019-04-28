import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default class main extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      firstTimerRunning: false,
      secondTimerRunning: false,
      isPaused:false,
      firstSideTime: navigation.getParam("time", "NO-ID"),
      secondSideTime: navigation.getParam("time", "NO-ID"),
      firstSideRemainingTime: navigation.getParam("time", "NO-ID"),
      secondSideRemainingTime: navigation.getParam("time", "NO-ID"),
      delayTime : navigation.getParam("delay", "NO-ID"),
    };

    let activeSide =''
  }

  render() {
    console.log("this.state.firstSideRemainingTime -> " + this.state.firstSideRemainingTime);
    console.log("this.state.firstSideTime -> " + this.state.firstSideTime);
    console.log("this.state.delayTime -> " + this.state.delayTime);
    console.log("condition -> " + this.state.firstSideRemainingTime >= this.state.firstSideTime );
    return (
      <View style={{ flex: 1 }}>
        <Timer
          onPress={this.tickFirstTimer.bind(this)}
          componentStyle={styles.rotate180}
          style={[
            styles.tabs,
            this.state.firstTimerRunning ? styles.active : styles.passive
          ]}
          until={this.state.firstSideRemainingTime}
          digitStyle={Object.assign(
            {},
            this.state.firstTimerRunning ? styles.active : styles.passive
          )}
          digitTxtStyle={ 
            this.state.firstTimerRunning ? styles.active : styles.passive
          }
          running={this.state.firstTimerRunning}
          onChange = {this.onChange.bind(this)}
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
          until={this.state.secondSideTime}
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

    if (!(this.state.firstSideRemainingTime >= this.state.firstSideTime -1)){
      console.log("this.state.delayTime -> " + this.state.delayTime);
      console.log("this.state.firstSideRemainingTime + this.state.delayTime -> " + this.state.firstSideRemainingTime + this.state.delayTime);
        this.setState({
          firstSideRemainingTime: this.state.firstSideRemainingTime + this.state.delayTime
        })
    }

  }

  onChange() {
   console.log("onChange ticked");
   this.setState({
    firstSideRemainingTime : this.state.firstSideRemainingTime - 1
   })
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
