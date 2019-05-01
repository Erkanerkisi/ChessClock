import React, { Component } from "react";
import { View } from "react-native";
import Timer from "./timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import TickSound from "./audio";
import { AppStyles as styles } from "./AppStyles";
import Settings from './settings'

export default class main extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      firstTimerRunning: false,
      secondTimerRunning: false,
      isFinished: false,
      isPaused: false,
      firstSideTime: navigation.getParam("time", "NO-ID"),
      secondSideTime: navigation.getParam("time", "NO-ID"),
      firstSideRemainingTime: navigation.getParam("time", "NO-ID"),
      secondSideRemainingTime: navigation.getParam("time", "NO-ID"),
      delayTime: navigation.getParam("delay", "NO-ID"),
      dialogVisible: false
    };

    let activeSide = "";

    this.unpauseIfPaused.bind(this);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#222222" }}>
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
          onChange={this.onChangeFirst.bind(this)}
          separatorStyle={styles.separatorStyle}
        />
        <View style={styles.settings}>
          <View style={[styles.center]}>
            <TouchableOpacity onPress={this.openSettings}>
              <Icon name="gear" size={50} color="#666666" />
            </TouchableOpacity>
            <Settings 
              dialogVisible = {this.state.dialogVisible}
              handleCancel = {this.handleCancel}
              handleDelete = {this.handleDelete}
            />
          </View>
          <View style={[styles.center]}>
            <TouchableOpacity
              onPress={
                this.state.isPaused
                  ? this.doPlay.bind(this)
                  : this.doPause.bind(this)
              }
            >
              <Icon
                name={this.state.isPaused ? "play" : "pause"}
                size={50}
                color="#666666"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Timer
          onPress={this.tickSecondTimer.bind(this)}
          style={[
            styles.tabs,
            this.state.secondTimerRunning ? styles.active : styles.passive
          ]}
          until={this.state.secondSideRemainingTime}
          digitStyle={
            this.state.secondTimerRunning ? styles.active : styles.passive
          }
          digitTxtStyle={
            this.state.secondTimerRunning ? styles.active : styles.passive
          }
          running={this.state.secondTimerRunning}
          onChange={this.onChangeSecond.bind(this)}
          separatorStyle={styles.separatorStyle}
        />
      </View>
    );
  }

  tickFirstTimer() {
    if (!this.state.isFinished) {
      TickSound.play();
      this.setState({
        firstTimerRunning: false,
        secondTimerRunning: true
      });

      this.unpauseIfPaused();

      if (
        !(
          this.state.firstSideRemainingTime >=
          this.state.firstSideTime - this.state.delayTime
        ) &&
        this.state.delayTime != 0
      ) {
        this.setState({
          firstSideRemainingTime:
            this.state.firstSideRemainingTime + this.state.delayTime
        });
      }
    }
  }

  onChangeFirst() {
<<<<<<< HEAD
    this.setState({
      firstSideRemainingTime: this.state.firstSideRemainingTime - 1
    });

    if (this.state.firstSideRemainingTime == 0) {
      this.setState({
        isFinished: true
      });
    }
=======
   this.setState({
    firstSideRemainingTime : this.state.firstSideRemainingTime - 0.5
   })

   if(this.state.firstSideRemainingTime == 0) {
     this.setState({
      isFinished: true
     })
   }
>>>>>>> change icons
  }

  onChangeSecond() {
    this.setState({
      secondSideRemainingTime: this.state.secondSideRemainingTime - 1
    });

    if (this.state.secondSideRemainingTime == 0) {
      this.setState({
        isFinished: true
      });
    }
  }

  tickSecondTimer() {
    if (!this.state.isFinished) {
      TickSound.play();
      this.setState({
        firstTimerRunning: true,
        secondTimerRunning: false
      });

      this.unpauseIfPaused();

      if (
        !(
          this.state.secondSideRemainingTime >=
          this.state.secondSideTime - this.state.delayTime
        ) &&
        this.state.delayTime != 0
      ) {
        this.setState({
          secondSideRemainingTime:
            this.state.secondSideRemainingTime + this.state.delayTime
        });
      }
    }
  }

  unpauseIfPaused() {
    if (this.state.isPaused) {
      this.setState({
        isPaused: false
      });
    }
  }

  doPause() {
    if (this.state.firstTimerRunning || this.state.secondTimerRunning) {
      this.activeSide = this.state.firstTimerRunning ? "first" : "second";
      this.setState({
        firstTimerRunning: false,
        secondTimerRunning: false,
        isPaused: true
      });
    }
  }
  doPlay() {
    if (!this.state.firstTimerRunning && !this.state.secondTimerRunning) {
      if (this.activeSide === "first")
        this.setState({ firstTimerRunning: true, isPaused: false });
      else this.setState({ secondTimerRunning: true, isPaused: false });
    }
  }

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
  handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });
  };
  openSettings = () => {
    this.setState({ dialogVisible: true });
  };
}
