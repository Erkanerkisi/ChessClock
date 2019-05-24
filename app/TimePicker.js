import React, { Component } from "react";
import PropTypes from "prop-types";
import { Picker, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  picker: {
    flex: 1
  }
});

const MAX_HOURS = 24;
const MAX_MINUTES = 60;
const MAX_SECONDS = 60;
/*
*
* This component is customized from react-native-simple-time-picker package.
* you can check it out via below link.
* https://www.npmjs.com/package/react-native-simple-time-picker
*
*/
export default class TimePicker extends Component {
  static propTypes = {
    selectedHours: PropTypes.number,
    selectedMinutes: PropTypes.number,
    selectedSeconds: PropTypes.number,
    onChange: PropTypes.func,
    hoursUnit: PropTypes.string,
    minutesUnit: PropTypes.string,
    secondsUnit: PropTypes.string,
    hourVisible: PropTypes.bool,
    minuteVisible: PropTypes.bool,
    secondVisible: PropTypes.bool
  };

  static defaultProps = {
    selectedHours: 0,
    selectedMinutes: 0,
    selectedSeconds: 0,
    onChange: null,
    hoursUnit: "",
    minutesUnit: "",
    secondsUnit: "",
    hourVisible: true,
    minuteVisible: true,
    secondVisible: true,
  };

  constructor(props) {
    super(props);
    const { selectedHours, selectedMinutes, selectedSeconds } = props;
    this.state = {
      selectedHours,
      selectedMinutes,
      selectedSeconds
    };
  }

  getHoursItems = () => {
    const items = [];
    const { hoursUnit } = this.props;
    for (let i = 0; i <= MAX_HOURS; i++) {
      items.push(
        <Picker.Item key={i} value={i} label={`${i.toString()}${hoursUnit}`} />
      );
    }
    return items;
  };

  getMinutesImtes = () => {
    const items = [];
    const { minutesUnit } = this.props;
    for (let i = 0; i <= MAX_MINUTES; i++) {
      items.push(
        <Picker.Item
          key={i}
          value={i}
          label={`${i.toString()}${minutesUnit}`}
        />
      );
    }
    return items;
  };
  getSecondsItems = () => {
    const items = [];
    const { secondsUnit } = this.props;
    for (let i = 0; i <= MAX_SECONDS; i++) {
      items.push(
        <Picker.Item
          key={i}
          value={i}
          label={`${i.toString()}${secondsUnit}`}
        />
      );
    }
    return items;
  };

  handleChangeHours = itemValue => {
    const { onChange } = this.props;
    this.setState(
      {
        selectedHours: itemValue
      },
      () => {
        const { selectedHours, selectedMinutes, selectedSeconds } = this.state;
        onChange(selectedHours, selectedMinutes, selectedSeconds);
      }
    );
  };

  handleChangeMinutes = itemValue => {
    const { onChange } = this.props;
    this.setState(
      {
        selectedMinutes: itemValue
      },
      () => {
        const { selectedHours, selectedMinutes, selectedSeconds } = this.state;
        onChange(selectedHours, selectedMinutes, selectedSeconds);
      }
    );
  };

  handleChangeSeconds = itemValue => {
    const { onChange } = this.props;
    this.setState(
      {
        selectedSeconds: itemValue
      },
      () => {
        const { selectedHours, selectedMinutes, selectedSeconds } = this.state;
        onChange(selectedHours, selectedMinutes, selectedSeconds);
      }
    );
  };

  render() {
    const { selectedHours, selectedMinutes, selectedSeconds } = this.state;
    const {hourVisible,minuteVisible,secondVisible} = this.props;
    return (
      <View style={styles.container}>
        {hourVisible ? (
          <Picker
            style={styles.picker}
            selectedValue={selectedHours}
            onValueChange={itemValue => this.handleChangeHours(itemValue)}
          >
            {this.getHoursItems()}
          </Picker>
        ) : null}

        {minuteVisible ? (
          <Picker
            style={styles.picker}
            selectedValue={selectedMinutes}
            onValueChange={itemValue => this.handleChangeMinutes(itemValue)}
          >
            {this.getMinutesImtes()}
          </Picker>
        ) : null}
        {secondVisible ? (
          <Picker
            style={styles.picker}
            selectedValue={selectedSeconds}
            onValueChange={itemValue => this.handleChangeSeconds(itemValue)}
          >
            {this.getSecondsItems()}
          </Picker>
        ) : null}
      </View>
    );
  }
}
