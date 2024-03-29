import React, { useState } from "react";
import { Text, TextInput, Pressable, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import FormStyle from "../styles/FormStyle";

function FormTextInput({
  autoCapitalize,
  autoCorrect,
  autoFocus,
  clearTextOnFocus,
  header,
  onChangeText,
  secureTextEntry,
  validateInput,
}) {
  const secureTextIconTurnOff = "eye";
  const secureTextIconTurnOn = "eye-off";

  const [errorMessage, setErrorMessage] = useState(" ");
  const [hideSecureText, setHideSecureText] = useState(secureTextEntry);
  
  const [secureTextIcon, setSecureTextIcon] = secureTextEntry
    ? useState(secureTextIconTurnOff)
    : useState(secureTextIconTurnOn);

  const [textInputStyle, setTextInputStyle] = useState(
    FormStyle.containerFormTextInputColorUnfocused
  );

  const onBlur = (e) => {
    let errorMessage = " ";

    if (validateInput != undefined) {
      let validInput = validateInput(e.nativeEvent.text);
      if (validInput != true) {
        errorMessage = validInput;
      }
    }

    setTextInputStyle(FormStyle.containerFormTextInputColorUnfocused);
    setErrorMessage(errorMessage);
  };

  const onChangeInput = (text) => {
    onChangeText(text);
    setErrorMessage(" ");
  };

  const onFocus = () => {
    setTextInputStyle(FormStyle.containerFormTextInputColorFocused);
  };

  const toggleShowSecureText = () => {
    hideSecureText
      ? setSecureTextIcon(secureTextIconTurnOn)
      : setSecureTextIcon(secureTextIconTurnOff);

    setHideSecureText(!hideSecureText);
  };

  return (
    <View style={FormStyle.containerInputLarge}>
      <Text style={FormStyle.textInputHeader}>{header}</Text>
      <View style={[FormStyle.containerFormTextInput, textInputStyle]}>
        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          clearTextOnFocus={clearTextOnFocus}
          onChangeText={onChangeInput}
          onEndEditing={onBlur}
          onFocus={onFocus}
          secureTextEntry={hideSecureText}
          style={FormStyle.textInput}
        />
        {secureTextEntry && (
          <Pressable
            onPress={toggleShowSecureText}
            style={FormStyle.containerIcon}
          >
            <MaterialCommunityIcons
              name={secureTextIcon}
              style={FormStyle.iconSecureText}
            />
          </Pressable>
        )}
      </View>
      <Text style={FormStyle.textErrorMessage}>{errorMessage}</Text>
    </View>
  );
}

export default FormTextInput;
