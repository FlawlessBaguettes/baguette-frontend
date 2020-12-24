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
    FormStyle.formTextInputContainerColor
  );

  const onBlur = (e) => {
    let errorMessage = " ";

    if (validateInput != undefined) {
      let validInput = validateInput(e.nativeEvent.text);
      if (validInput != true) {
        errorMessage = validInput;
      }
    }

    setTextInputStyle(FormStyle.formTextInputContainerColor);
    setErrorMessage(errorMessage);
  };

  const onChangeInput = (text) => {
    onChangeText(text);
    setErrorMessage(" ");
  };

  const onFocus = () => {
    setTextInputStyle(FormStyle.formTextInputContainerColorFocused);
  };

  const toggleShowSecureText = () => {
    hideSecureText
      ? setSecureTextIcon(secureTextIconTurnOn)
      : setSecureTextIcon(secureTextIconTurnOff);

    setHideSecureText(!hideSecureText);
  };

  return (
    <View style={FormStyle.inputContainerLarge}>
      <Text style={FormStyle.inputHeaderText}>{header}</Text>
      <View style={[FormStyle.formTextInputContainer, textInputStyle]}>
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

export default FormTextInput;
