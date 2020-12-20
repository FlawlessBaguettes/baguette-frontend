import React, { Component } from "react";
import { Text, TextInput, TouchableHighlight, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import FormStyle from "../styles/FormStyle";

class FormTextInput extends Component {
  constructor(props) {
    super(props);

    let hideSecureText = false;
    let secureTextIcon = "eye-off";
    if (this.props.secureTextEntry == true) {
      hideSecureText = true;
      secureTextIcon = "eye";
    }
    this.state = {
      errorMessage: null,
      hideSecureText: hideSecureText,
      secureTextIcon: secureTextIcon,
      textInputStyle: FormStyle.textInput,
    };
  }

  onBlur = (e) => {
    const { validateInput } = this.props;
    let errorMessage = null;

    if (validateInput != undefined) {
      let validInput = validateInput(e.nativeEvent.text);
      if (validInput != true) {
        errorMessage = validInput;
      }
    }

    this.setState({
      textInputStyle: FormStyle.textInput,
      errorMessage: errorMessage,
    });
  };

  onChangeText = (text) => {
    this.props.onChangeText(text);
    this.setState({
      errorMessage: null,
    });
  };

  onFocus = () => {
    this.setState({ textInputStyle: FormStyle.textInputFocused });
  };

  toggleShowSecureText = () => {
    const { hideSecureText } = this.state;
    if (hideSecureText) {
      this.setState({
        hideSecureText: false,
        secureTextIcon: "eye-off",
      });
    } else {
      this.setState({
        hideSecureText: true,
        secureTextIcon: "eye",
      });
    }
  };

  render() {
    const {
      autoCapitalize,
      autoCorrect,
      autoFocus,
      clearTextOnFocus,
      header,
      secureTextEntry,
    } = this.props;
    const {
      errorMessage,
      hideSecureText,
      secureTextIcon,
      textInputStyle,
    } = this.state;
    return (
      <View style={FormStyle.inputContainerLarge}>
        <Text style={FormStyle.inputHeader}>{header}</Text>
        <View style={FormStyle.formTextInputContainer}>
          <TextInput
            style={textInputStyle}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            clearTextOnFocus={clearTextOnFocus}
            onChangeText={(text) => this.onChangeText(text)}
            onBlur={(e) => this.onBlur(e)}
            onFocus={this.onFocus}
            secureTextEntry={hideSecureText}
          />
          {secureTextEntry && (
            <TouchableHighlight
              style={FormStyle.iconContainer}
              onPress={this.toggleShowSecureText}
            >
              <MaterialCommunityIcons
                name={secureTextIcon}
                style={FormStyle.secureTextIcon}
              />
            </TouchableHighlight>
          )}
        </View>
        <Text style={FormStyle.errorMessage}>{errorMessage}</Text>
      </View>
    );
  }
}

export default FormTextInput;