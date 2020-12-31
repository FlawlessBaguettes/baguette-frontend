import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import FormTextInput from "./FormTextInput";
import CustomButton from "./CustomButton";

import FormStyle from "../styles/FormStyle";

import { validateEmail, validatePasswordWeak } from "../utils/FormValidation";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    updateLoginButton();
  });

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const onPressLogin = () => {
    const isValidForm = validateForm();

    if (isValidForm) {
      console.log("Logged In!");
    }
  };

  const onPressSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  const updateLoginButton = () => {
    const isValidForm = validateForm();

    if (isLoginButtonDisabled === true && isValidForm) {
      setIsLoginButtonDisabled(false);
    } else if (isLoginButtonDisabled === false && !isValidForm) {
      setIsLoginButtonDisabled(true);
    }
  };

  const validateForm = () => {
    return (
      validateEmail(email) === true && validatePasswordWeak(password) === true
    );
  };

  return (
    <ScrollView contentContainerStyle={FormStyle.container}>
      <View style={FormStyle.formsContainer}>
        <FormTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          autoFocus={true}
          clearTextOnFocus={false}
          header={"Email"}
          onChangeText={handleEmail}
          validateInput={validateEmail}
        />

        <FormTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          clearTextOnFocus={false}
          header={"Password"}
          onChangeText={handlePassword}
          secureTextEntry={true}
          validateInput={validatePasswordWeak}
        />
      </View>

      <View style={FormStyle.buttonsContainer}>
        <CustomButton
          disabled={isLoginButtonDisabled}
          isPrimary={true}
          onPress={onPressLogin}
          title={"Login"}
        />

        <CustomButton
          isPrimary={false}
          onPress={onPressSignUp}
          title={"Sign Up"}
        />
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
