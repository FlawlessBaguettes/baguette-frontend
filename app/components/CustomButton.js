import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import PropTypes from "prop-types";

import ButtonStyle from "../styles/ButtonStyle";

function CustomButton({ disabled, isPrimary, onPress, title }) {
  const [buttonStyle, setButtonStyle] = useState(null);
  const [buttonStyleEnabled, setButtonStyleEnabled] = useState(null);
  const [buttonStylePressed, setButtonStylePressed] = useState(null);
  const [textStyle, setTextStyle] = useState(null);
  const [textStyleEnabled, setTextStyleEnabled] = useState(null);
  const [textStylePressed, setTextStylePressed] = useState(null);

  useEffect(() => {
    updateButtonStyleEnabled();
    updateButtonStyle();
    updateTextStyle();
    updateTextStyleEnabled();
  });

  const onPressIn = () => {
    !isPrimary
      ? setTextStylePressed(ButtonStyle.textButtonSecondaryPressed)
      : setTextStylePressed(null);
      
    isPrimary ? setButtonStylePressed(ButtonStyle.buttonPrimaryPressed) : null;
  };

  const onPressOut = () => {
    setTextStylePressed(null);
    setButtonStylePressed(null);
  };

  const updateButtonStyleEnabled = () => {
    if (isPrimary) {
      disabled
        ? setButtonStyleEnabled(ButtonStyle.buttonPrimaryDisabled)
        : setButtonStyleEnabled(ButtonStyle.buttonPrimaryEnabled);
    }
  };

  const updateButtonStyle = () => {
    const style = isPrimary ? ButtonStyle.buttonPrimary : null;

    setButtonStyle(style);
  };

  const updateTextStyle = () => {
    const style = isPrimary
      ? ButtonStyle.textButtonPrimary
      : ButtonStyle.textButtonSecondary;

    setTextStyle(style);
  };

  const updateTextStyleEnabled = () => {
    if (!isPrimary) {
      disabled
        ? setTextStyleEnabled(ButtonStyle.textButtonSecondaryDisabled)
        : setTextStyleEnabled(ButtonStyle.textButtonSecondaryEnabled);
    }
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[buttonStyle, buttonStyleEnabled, buttonStylePressed]}
    >
      <Text style={[textStyle, textStyleEnabled, textStylePressed]}>
        {title}
      </Text>
    </Pressable>
  );
}

CustomButton.propTypes = {
  isPrimary: PropTypes.bool.isRequired,
};

export default CustomButton;
