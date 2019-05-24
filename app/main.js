import React, { Component } from "react";
import { View } from "react-native";
import Timer from "./timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import TickSound from "./audio";
import { AppStyles as styles } from "./AppStyles";
import Settings from './Settings'

export default class main extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      firstTimerStyleActive: false,
      secondTimerStyleActive: false,
      firstTimerRunning: false,
      secondTimerRunning: false,
      isFinished: false,
      isPaused: false,
      firstSideTime: navigation.getParam("time", "NO-ID"),
      secondSideTime: navigation.getParam("time", "NO-ID"),
      firstSideRemainingTime: navigation.getParam("time", "NO-ID"),
      secondSideRemainingTime: navigation.getParam("time", "NO-ID"),
      firstSidePreRemainingTime: navigation.getParam("time", "NO-ID"),
      secondSidePreRemainingTime: navigation.getParam("time", "NO-ID"),
      delayTime: navigation.getParam("delay", "NO-ID"),
      dialogVisible: false,
      activeSide: '',
      timeType: 'Simple',
      x: 3
    };

    this.unpauseIfPaused = this.unpauseIfPaused.bind(this);
    this.changeTurn = this.changeTurn.bind(this);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#222222" }}>
        <Timer
          onPress={this.tickFirstTimer.bind(this)}
          componentStyle={styles.rotate180}
          style={[
            styles.tabs,
            this.state.firstTimerStyleActive ? styles.active : styles.passive
          ]}
          until={this.state.firstSideRemainingTime}
          digitStyle={Object.assign(
            {},
            this.state.firstTimerStyleActive ? styles.active : styles.passive
          )}
          digitTxtStyle={
            this.state.firstTimerStyleActive ? styles.active : styles.passive
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
              dialogVisible={this.state.dialogVisible}
              handleCancel={this.handleCancel}
              handleSet={this.handleSet}
              timeType={this.state.timeType}
              time={this.state.firstSideTime}
              value={this.state.delayTime}
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
            this.state.secondTimerStyleActive ? styles.active : styles.passive
          ]}
          until={this.state.secondSideRemainingTime}
          digitStyle={
            this.state.secondTimerStyleActive ? styles.active : styles.passive
          }
          digitTxtStyle={
            this.state.secondTimerStyleActive ? styles.active : styles.passive
          }
          running={this.state.secondTimerRunning}
          onChange={this.onChangeSecond.bind(this)}
          separatorStyle={styles.separatorStyle}
        />
      </View>
    );
  }

  tickFirstTimer() {
    if (!this.state.isFinished
      && (this.state.activeSide == '' || this.state.activeSide == 'first')) {

      this.unpauseIfPaused();
      this.changeTurn(false);
      TickSound.play();

      if (this.state.timeType === "Fischer") {

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
      // Bronstein First Ticker mechanism
      else if (this.state.timeType === "Bronstein") {
        if (
          (
            this.state.firstSidePreRemainingTime - this.state.firstSideRemainingTime >= this.state.delayTime
          ) &&
          this.state.delayTime != 0
        ) {

          let _firstSideRemainingTime = this.state.firstSideRemainingTime + this.state.delayTime;
          this.setState({
            firstSideRemainingTime: _firstSideRemainingTime,
            firstSidePreRemainingTime: _firstSideRemainingTime
          });
        }
        else {
          if (this.state.delayTime != 0) {
            let _firstSideRemainingTime = this.state.firstSideRemainingTime + (this.state.firstSidePreRemainingTime - this.state.firstSideRemainingTime);
            this.setState({
              firstSideRemainingTime: _firstSideRemainingTime,
              firstSidePreRemainingTime: _firstSideRemainingTime
            });
          }
        }
      }
      else if ((this.state.timeType === "Delay")) {
        setTimeout(() => {
          this.setState({
            secondTimerRunning: true,
            activeSide: 'second'
          });
        }, this.state.delayTime * 1000);

      }
    }
  }

  onChangeFirst() {
    this.setState({
      firstSideRemainingTime: this.state.firstSideRemainingTime - 1
    });

    if (this.state.firstSideRemainingTime == 0) {
      this.setState({
        isFinished: true
      });
    }
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

  changeTurn(turn) {
    this.setState({
      firstTimerRunning: turn,
      secondTimerRunning: !turn,
      firstTimerStyleActive: turn,
      secondTimerStyleActive: !turn,
      activeSide: turn ? 'first' : 'second'
    });
  }

  tickSecondTimer() {

    if (!this.state.isFinished
      && (this.state.activeSide == '' || this.state.activeSide == 'second')) {

      this.unpauseIfPaused();
      this.changeTurn(true);
      TickSound.play();

      if (this.state.timeType === "Fischer") {

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

      else if (this.state.timeType === "Bronstein") {

        if (
          (
            this.state.secondSidePreRemainingTime - this.state.secondSideRemainingTime >= this.state.delayTime
          ) &&
          this.state.delayTime != 0
        ) {
          let _secondSideRemainingTime = this.state.secondSideRemainingTime + this.state.delayTime;
          this.setState({
            secondSideRemainingTime: _secondSideRemainingTime,
            secondSidePreRemainingTime: _secondSideRemainingTime
          });
        }
        else {
          if (this.state.delayTime != 0) {
            let _secondSideRemainingTime = this.state.secondSideRemainingTime + (this.state.secondSidePreRemainingTime - this.state.secondSideRemainingTime);
            this.setState({
              secondSideRemainingTime: _secondSideRemainingTime,
              secondSidePreRemainingTime: _secondSideRemainingTime
            });
          }
        }

      }
      else if ((this.state.timeType === "Delay")) {

        setTimeout(() => {
          this.setState({
            firstTimerRunning: true,
            activeSide: 'first'
          });
        }, this.state.delayTime * 1000);
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
      this.setState({
        firstTimerRunning: false,
        secondTimerRunning: false,
        firstTimerStyleActive: false,
        secondTimerStyleActive: false,
        isPaused: true,
        activeSide: this.state.firstTimerRunning ? 'first' : 'second'
      });
    }
  }

  doPlay() {
    if (!this.state.firstTimerRunning && !this.state.secondTimerRunning) {
      if (this.state.activeSide === "first")
        this.setState({ firstTimerRunning: true, firstTimerStyleActive: true, isPaused: false });
      else this.setState({ secondTimerRunning: true, secondTimerStyleActive: true, isPaused: false });
    }
  }

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleSet = (type, minute, value) => {

    let totalSecond = (minute * 60);
    this.setState({
      dialogVisible: false,
      firstTimerRunning: false,
      secondTimerRunning: false,
      firstTimerStyleActive: false,
      secondTimerStyleActive: false,
      firstSideTime: totalSecond,
      secondSideTime: totalSecond,
      firstSideRemainingTime: totalSecond,
      secondSideRemainingTime: totalSecond,
      firstSidePreRemainingTime: totalSecond,
      secondSidePreRemainingTime: totalSecond,
      delayTime: value,
      activeSide: '',
      timeType: type
    });
  };
  openSettings = () => {
    this.setState({ dialogVisible: true });
  };
}
