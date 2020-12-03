import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

import FormStyle from "../styles/FormStyle";

class DateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      dateOfBirth: undefined,
      isDatePickerVisible: false,
    };
  }

  formatDate(date) {
    if (date != null) {
      return Moment(date).format("MMM D, YYYY");
    }
    return "mm/dd/yyyy";
  }

  handleCancel = (date) => {
    this.hideDatePicker();
    this.setErrorMessage(date);
  };

  handleConfirm = (date) => {
    if (date != undefined) {
      date = this.removeTime(date);

      this.setState({
        dateOfBirth: date,
      });

      this.props.handleConfirm(date);
    }

    this.hideDatePicker();
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  removeTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  showDatePicker = () => {
    this.setState({
      errorMessage: null,
      isDatePickerVisible: true,
    });
  };

  setErrorMessage(date) {
    const { validateInput } = this.props;
    const { dateOfBirth } = this.state;
    var errorMessage = null;

    if (validateInput != undefined && !dateOfBirth) {
      if (date != undefined) {
        date = this.removeTime(date);
      }

      var validInput = validateInput(date);
      if (validInput != true) {
        errorMessage = validInput;
      }
    }

    this.setState({
      errorMessage: errorMessage,
    });
  }

  render() {
    const { header, date } = this.props;
    const { errorMessage, isDatePickerVisible } = this.state;

    const defaultDate = date == null ? undefined : date;

    return (
      <View style={FormStyle.inputContainerSmall}>
        <Text style={FormStyle.inputHeader}>{header}</Text>

        <TouchableWithoutFeedback onPress={this.showDatePicker}>
          <View style={FormStyle.dateContainer}>
            <MaterialCommunityIcons
              name="calendar"
              style={FormStyle.calendarIcon}
            />
            <Text style={FormStyle.dateTextField}>{this.formatDate(date)}</Text>
          </View>
        </TouchableWithoutFeedback>

        <DateTimePickerModal
          date={defaultDate}
          isDarkModeEnabled={false}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.handleCancel}
        />
        <Text style={FormStyle.errorMessage}>{errorMessage}</Text>
      </View>
    );
  }
}

export default DateInput;
