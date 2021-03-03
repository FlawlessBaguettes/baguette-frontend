import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import axios from "axios";

import { AuthContext } from "./AuthContext";
import CustomButton from "./CustomButton";
import FormTextInput from "./FormTextInput";

import { AUTH_USERS_ENDPOINT } from "../api/constants";

import FormStyle from "../styles/FormStyle";

import { validateEmail, validatePasswordWeak } from "../utils/FormValidation";

function LoginScreen({ navigation }) {
  const { setStorage } = useContext(AuthContext);

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

  const onPressLogin = async () => {
    const isValidForm = validateForm();

    if (isValidForm) {
      try {
        const { data } = await axios.post(AUTH_USERS_ENDPOINT, {
          email: email,
          password: password,
        });
        const { message, token, expiryTime, userData } = data;
        setStorage(token, expiryTime, userData);
        const popAction = StackActions.pop(1);
        navigation.dispatch(popAction);
      } catch (error) {
        console.log(error.response.data.message);
      }
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
      <View style={FormStyle.containerForm}>
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

      <View style={FormStyle.containerButtons}>
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
