import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import PropTypes from "prop-types";

import ButtonStyle from "../styles/ButtonStyle";
import { pressableButtonRipple } from "../styles/constants";

function CustomButton({ disabled, isPrimary, onPress, title }) {
  const [androidRipple, setAndroidRipple] = useState(null);
  const [buttonStyle, setButtonStyle] = useState(null);
  const [buttonEnabledStyle, setButtonEnabledStyle] = useState(null);
  const [textStyle, setTextStyle] = useState(null);

  useEffect(() => {
    updateAndroidRipple();
    updateButtonEnabledStyle();
    updateButtonStyle();
    updateTextStyle();
  });

  const onButtonPress = () => {
    onPress();
  };

  const updateAndroidRipple = () => {
    const style = isPrimary ? pressableButtonRipple : null;

    setAndroidRipple(style);
  };

  const updateButtonEnabledStyle = () => {
    if (isPrimary) {
      if (disabled) {
        setButtonEnabledStyle(ButtonStyle.buttonPrimaryDisabled);
      } else {
        setButtonEnabledStyle(ButtonStyle.buttonPrimaryEnabled);
      }
    } else {
      if (disabled) {
        setButtonEnabledStyle(ButtonStyle.buttonSecondaryDisabled);
      } else {
        setButtonEnabledStyle(ButtonStyle.buttonSecondaryEnabled);
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
      ? ButtonStyle.buttonPrimaryText
      : ButtonStyle.buttonSecondaryText;

    setTextStyle(style);
  };

  return (
    <Pressable
      android_ripple={androidRipple}
      disabled={disabled}
      onPress={onButtonPress}
      style={[buttonStyle, buttonEnabledStyle]}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}

CustomButton.propTypes = {
  isPrimary: PropTypes.bool.isRequired,
};

export default CustomButton;
