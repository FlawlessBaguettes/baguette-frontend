import React, { Component } from "react";
import { Text, Pressable, View } from "react-native";
import PropTypes from "prop-types";

import ButtonStyle from "../styles/ButtonStyle";
import { pressableButtonRipple } from "../styles/constants";

class CTAButton extends Component {
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
          buttonEnabledStyle: ButtonStyle.primaryButtonDisabled,
        });
      } else {
        this.setState({
          buttonEnabledStyle: ButtonStyle.primaryButtonEnabled,
        });
      }
    } else {
      if (disabled) {
        this.setState({
          buttonEnabledStyle: ButtonStyle.secondaryButtonDisabled,
        });
      } else {
        this.setState({
          buttonEnabledStyle: ButtonStyle.secondaryButtonEnabled,
        });
      }
    }
  }

  setButtonStyle() {
    const { isPrimary } = this.props;

    if (isPrimary) {
      this.setState({
        buttonStyle: ButtonStyle.primaryButton,
      });
    } else {
      buttonStyle: ButtonStyle.secondaryButton;
    }
  }

  setTextStyle() {
    const { isPrimary } = this.props;

    if (isPrimary) {
      this.setState({
        textStyle: ButtonStyle.primaryButtonText,
      });
    } else {
      this.setState({
        textStyle: ButtonStyle.secondaryButtonText,
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

CTAButton.propTypes = {
  isPrimary: PropTypes.bool.isRequired,
};

export default CTAButton;
