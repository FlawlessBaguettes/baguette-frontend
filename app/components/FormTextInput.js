import React, { Component } from "react";
import { Text, TextInput, Pressable, View } from "react-native";

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
      errorMessage: " ",
      hideSecureText: hideSecureText,
      secureTextIcon: secureTextIcon,
      textInputStyle: FormStyle.formTextInputContainerColor,
    };
  }

  onBlur = (e) => {
    const { validateInput } = this.props;
    let errorMessage = " ";

    if (validateInput != undefined) {
      let validInput = validateInput(e.nativeEvent.text);
      if (validInput != true) {
        errorMessage = validInput;
      }
    }

    this.setState({
      textInputStyle: FormStyle.formTextInputContainerColor,
      errorMessage: errorMessage,
    });
  };

  onChangeText = (text) => {
    this.props.onChangeText(text);
    this.setState({
      errorMessage: " ",
    });
  };

  onFocus = () => {
    this.setState({
      textInputStyle: FormStyle.formTextInputContainerColorFocused,
    });
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
        <Text style={FormStyle.inputHeaderText}>{header}</Text>
        <View style={[FormStyle.formTextInputContainer, textInputStyle]}>
          <TextInput
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            clearTextOnFocus={clearTextOnFocus}
            onChangeText={(text) => this.onChangeText(text)}
            onEndEditing={(e) => this.onBlur(e)}
            onFocus={this.onFocus}
            secureTextEntry={hideSecureText}
            style={FormStyle.textInput}
          />
          {secureTextEntry && (
            <Pressable
              onPress={this.toggleShowSecureText}
              style={FormStyle.iconContainer}
            >
              <MaterialCommunityIcons
                name={secureTextIcon}
                style={FormStyle.secureTextIcon}
              />
            </Pressable>
          )}
        </View>
        <Text style={FormStyle.errorMessage}>{errorMessage}</Text>
      </View>
    );
  }
}

export default FormTextInput;
