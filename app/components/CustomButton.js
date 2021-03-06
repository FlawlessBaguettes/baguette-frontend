import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import ButtonStyle from '../styles/ButtonStyle';

function CustomButton({
  disabled,
  isPrimary,
  onPress,
  theme: propsTheme,
  title,
}) {
  const theme = propsTheme ? propsTheme : 'dark';

  const [buttonStyle, setButtonStyle] = useState(null);
  const [buttonStyleEnabled, setButtonStyleEnabled] = useState(null);
  const [buttonStylePressed, setButtonStylePressed] = useState(null);
  const [textTheme, setTextTheme] = useState(null);
  const [textStyle, setTextStyle] = useState(null);
  const [textStyleEnabled, setTextStyleEnabled] = useState(null);
  const [textStylePressed, setTextStylePressed] = useState(null);

  useEffect(() => {
    updateButtonStyleEnabled();
    updateButtonStyle();
    updateTextTheme();
    updateTextStyle();
    updateTextStyleEnabled();
  });

  const onPressIn = () => {
    if (isPrimary) {
      setButtonStylePressed(ButtonStyle.buttonPrimaryPressed);
    } else {
      setTextStylePressed(ButtonStyle.textButtonSecondaryPressed);
    }
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
    isPrimary ? setButtonStyle(ButtonStyle.buttonPrimary) : null;
  };

  const updateTextTheme = () => {
    if (!isPrimary) {
      theme === 'dark'
        ? setTextTheme(ButtonStyle.textButtonSecondaryDark)
        : setTextTheme(ButtonStyle.textButtonSecondaryLight);
    }
  };

  const updateTextStyle = () => {
    isPrimary
      ? setTextStyle(ButtonStyle.textButtonPrimary)
      : setTextStyle(ButtonStyle.textButtonSecondary);
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
      <Text style={[textStyle, textStyleEnabled, textStylePressed, textTheme]}>
        {title}
      </Text>
    </Pressable>
  );
}

CustomButton.propTypes = {
  isPrimary: PropTypes.bool.isRequired,
};

export default CustomButton;
