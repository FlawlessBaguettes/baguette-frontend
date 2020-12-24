import React, { useState, useEffect } from "react";
import { Text, Pressable, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

import FormStyle from "../styles/FormStyle";

function DateInput({ date, handleConfirm, header, validateInput }) {
  const [defaultDate, setDefaultDate] = useState(undefined);
  const [dateOfBirth, setDateOfBirth] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(" ");
  const [formattedDate, setFormattedDate] = useState(null);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  useEffect(() => {
    updateDefaultDate();
    formatDate();
  });

  const formatDate = () => {
    date != null
      ? setFormattedDate(Moment(date).format("MMM D, YYYY"))
      : setFormattedDate("mm/dd/yyyy");
  };

  const handleDateCancel = (d) => {
    hideDatePicker();
    updateErrorMessage(d);
  };

  const handleDateConfirm = (d) => {
    if (d != undefined) {
      d = removeTime(d);

      setDateOfBirth(d);

      handleConfirm(d);
    }

    hideDatePicker();
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const removeTime = (d) => {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  };

  const showDatePicker = () => {
    setErrorMessage(" ");
    setIsDatePickerVisible(true);
  };

  const updateDefaultDate = () => {
    const d = date === null ? undefined : date;

    setDefaultDate(d);
  };

  const updateErrorMessage = (d) => {
    let errorMessage = null;

    if (validateInput != undefined && !dateOfBirth) {
      if (d != undefined) {
        d = removeTime(d);
      }

      let validInput = validateInput(d);
      if (validInput != true) {
        errorMessage = validInput;
      }
    }

    setErrorMessage(errorMessage);
  };

  return (
    <View style={FormStyle.inputContainerLarge}>
      <Text style={FormStyle.inputHeaderText}>{header}</Text>

      <Pressable onPress={showDatePicker} style={FormStyle.dateContainer}>
        <MaterialCommunityIcons
          name="calendar"
          style={FormStyle.calendarIcon}
        />
        <Text style={FormStyle.dateTextField}>{formattedDate}</Text>
      </Pressable>

      <DateTimePickerModal
        date={defaultDate}
        isDarkModeEnabled={false}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={handleDateCancel}
      />
      <Text style={FormStyle.errorMessage}>{errorMessage}</Text>
    </View>
  );
}

export default DateInput;
