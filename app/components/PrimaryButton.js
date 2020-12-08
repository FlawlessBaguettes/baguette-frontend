import React, { Component } from "react";
import { Text, Pressable, View } from "react-native";

import ButtonStyle from "../styles/ButtonStyle";
import { pressableButtonRipple } from "../styles/constants";

class PrimaryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryButtonStyle: ButtonStyle.primaryButtonEnabled,
    };
  }

  componentDidMount() {
    this.setButtonStyle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.disabled != this.props.disabled) {
      this.setButtonStyle();
    }
  }

  onPress = () => {
    this.props.onPress();
  };

  setButtonStyle() {
    const { disabled } = this.props;

    if (disabled) {
      this.setState({
        primaryButtonStyle: ButtonStyle.primaryButtonDisabled,
      });
    } else {
      this.setState({
        primaryButtonStyle: ButtonStyle.primaryButtonEnabled,
      });
    }
  }

  render() {
    const { disabled, title } = this.props;
    const { primaryButtonStyle } = this.state;

    return (
      <Pressable
        android_ripple={pressableButtonRipple}
        disabled={disabled}
        onPress={this.onPress}
        style={[ButtonStyle.primaryButton, primaryButtonStyle]}
      >
        <Text style={ButtonStyle.primaryButtonText}>{title}</Text>
      </Pressable>
    );
  }
}

export default PrimaryButton;
