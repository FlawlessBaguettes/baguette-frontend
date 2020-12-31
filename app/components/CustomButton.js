import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import PropTypes from "prop-types";

import ButtonStyle from "../styles/ButtonStyle";
import { pressableButtonRipple } from "../styles/constants";

function CustomButton({ disabled, isPrimary, onPress, title }) {
  const [androidRipple, setAndroidRipple] = useState(null);
  const [buttonStyle, setButtonStyle] = useState(null);
  const [buttonStyleEnabled, setButtonStyleEnabled] = useState(null);
  const [textStyle, setTextStyle] = useState(null);
  const [textStylePressed, setTextStylePressed] = useState(null);

  useEffect(() => {
    updateAndroidRipple();
    updateButtonStyleEnabled();
    updateButtonStyle();
    updateTextStyle();
  });

  const updateAndroidRipple = () => {
    const style = isPrimary ? pressableButtonRipple : null;

    setAndroidRipple(style);
  };

  const updateButtonStyleEnabled = () => {
    if (isPrimary) {
      if (disabled) {
        setButtonStyleEnabled(ButtonStyle.buttonPrimaryDisabled);
      } else {
        setButtonStyleEnabled(ButtonStyle.buttonPrimaryEnabled);
      }
    } else {
      if (disabled) {
        setButtonStyleEnabled(ButtonStyle.buttonSecondaryDisabled);
      } else {
        setButtonStyleEnabled(ButtonStyle.buttonSecondaryEnabled);
      }
    }
  };

  const updateButtonStyle = () => {
    const style = isPrimary
      ? ButtonStyle.buttonPrimary
      : ButtonStyle.buttonSecondary;

    setButtonStyle(style);
  };

  const updateTextStyle = () => {
    const style = isPrimary
      ? ButtonStyle.textButtonPrimary
      : ButtonStyle.textButtonSecondary;

    setTextStyle(style);
  };

  const onPressIn = () => {
    !isPrimary ? setTextStylePressed(ButtonStyle.textButtonSecondaryPressed) : null
  }

  const onPressOut = () => {
    setTextStylePressed(null)
  }

  return (
    <Pressable
      android_ripple={androidRipple}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={(pressed) => [buttonStyle, buttonStyleEnabled]}
    >
      <Text style={[textStyle, textStylePressed]}>{title}</Text>
    </Pressable>
  );
}

CustomButton.propTypes = {
  isPrimary: PropTypes.bool.isRequired,
};

export default CustomButton;
