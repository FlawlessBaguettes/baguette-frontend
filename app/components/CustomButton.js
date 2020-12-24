import React, { Component } from "react";
import { Text, Pressable, View } from "react-native";
import PropTypes from "prop-types";

import ButtonStyle from "../styles/ButtonStyle";
import { pressableButtonRipple } from "../styles/constants";

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      androidRipple: null,
      buttonStyle: null,
      buttonEnabledStyle: null,
      textStyle: null,
    };
  }

  componentDidMount() {
    this.setAndroidRipple();
    this.setButtonEnabledStyle();
    this.setButtonStyle();
    this.setTextStyle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.disabled != this.props.disabled) {
      this.setButtonEnabledStyle();
    }
  }

  onPress = () => {
    this.props.onPress();
  };

  setAndroidRipple() {
    const { isPrimary } = this.props;

    if (isPrimary) {
      this.setState({
        androidRipple: pressableButtonRipple,
      });
    }
  }

  setButtonEnabledStyle() {
    const { disabled, isPrimary } = this.props;

    if (isPrimary) {
      if (disabled) {
        this.setState({
          buttonEnabledStyle: ButtonStyle.buttonPrimaryDisabled,
        });
      } else {
        this.setState({
          buttonEnabledStyle: ButtonStyle.buttonPrimaryEnabled,
        });
      }
    } else {
      if (disabled) {
        this.setState({
          buttonEnabledStyle: ButtonStyle.buttonSecondaryDisabled,
        });
      } else {
        this.setState({
          buttonEnabledStyle: ButtonStyle.buttonSecondaryEnabled,
        });
      }
    }
  }

  setButtonStyle() {
    const { isPrimary } = this.props;

    if (isPrimary) {
      this.setState({
        buttonStyle: ButtonStyle.buttonPrimary,
      });
    } else {
      buttonStyle: ButtonStyle.buttonSecondary;
    }
  }

  setTextStyle() {
    const { isPrimary } = this.props;

    if (isPrimary) {
      this.setState({
        textStyle: ButtonStyle.buttonPrimaryText,
      });
    } else {
      this.setState({
        textStyle: ButtonStyle.buttonSecondaryText,
      });
    }
  }

  render() {
    const { disabled, title } = this.props;
    const {
      androidRipple,
      buttonEnabledStyle,
      buttonStyle,
      textStyle,
    } = this.state;

    return (
      <Pressable
        android_ripple={androidRipple}
        disabled={disabled}
        onPress={this.onPress}
        style={[buttonStyle, buttonEnabledStyle]}
      >
        <Text style={textStyle}>{title}</Text>
      </Pressable>
    );
  }
}

CustomButton.propTypes = {
  isPrimary: PropTypes.bool.isRequired,
};

export default CustomButton;
