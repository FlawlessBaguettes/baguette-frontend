import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import axios from "axios";

import { AuthContext } from "./AuthContext";
import CustomButton from "./CustomButton";
import DateInput from "./DateInput";
import FormTextInput from "./FormTextInput";

import { SIGNUP_USERS_ENDPOINT } from "../api/constants";

import FormStyle from "../styles/FormStyle";

import {
  validateDateOfBirth,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePasswordStrong,
  validateUsername,
} from "../utils/FormValidation";

function SignUpScreen({ navigation }) {
  const { setStorage } = useContext(AuthContext);

  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [isSignUpButtonDisabled, setIsSignUpButtonDisabled] = useState(true);
  const [lastName, setLastName] = useState(null);
  const [password, setPssword] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    updateSignUpButton();
  });

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handleDateOfBirth = (date) => {
    setDateOfBirth(date);
  };

  const handleFirstName = (text) => {
    setFirstName(text);
  };

  const handleLastName = (text) => {
    setLastName(text);
  };

  const handlePassword = (text) => {
    setPssword(text);
  };

  const handleUsername = (text) => {
    setUsername(text);
  };

  const onPressLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const onPressSignUp = async () => {
    const isValidForm = validateForm();

    if (isValidForm) {
      try {
        const { data } = await axios.post(SIGNUP_USERS_ENDPOINT, {
          username: username,
          password: password,
          email: email,
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
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

  const updateSignUpButton = () => {
    const isValidForm = validateForm();

    if (isSignUpButtonDisabled === true && isValidForm) {
      setIsSignUpButtonDisabled(false);
    } else if (isSignUpButtonDisabled === false && !isValidForm) {
      setIsSignUpButtonDisabled(true);
    }
  };

  const validateForm = () => {
    return (
      validateDateOfBirth(dateOfBirth) === true &&
      validateEmail(email) === true &&
      validateFirstName(firstName) === true &&
      validateLastName(lastName) === true &&
      validatePasswordStrong(password) === true &&
      validateUsername(username) === true
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
          header={"First Name"}
          onChangeText={handleFirstName}
          validateInput={validateFirstName}
        />

        <FormTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          clearTextOnFocus={false}
          header={"Last Name"}
          onChangeText={handleLastName}
          validateInput={validateLastName}
        />

        <FormTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          clearTextOnFocus={false}
          header={"Email"}
          onChangeText={handleEmail}
          validateInput={validateEmail}
        />

        <FormTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          clearTextOnFocus={false}
          header={"Username"}
          onChangeText={handleUsername}
          validateInput={validateUsername}
        />

        <FormTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          clearTextOnFocus={false}
          header={"Password"}
          onChangeText={handlePassword}
          secureTextEntry={true}
          validateInput={validatePasswordStrong}
        />

        <DateInput
          date={dateOfBirth}
          handleConfirm={handleDateOfBirth}
          header={"Date of Birth"}
          validateInput={validateDateOfBirth}
        />
      </View>

      <View style={FormStyle.containerButtons}>
        <CustomButton
          disabled={isSignUpButtonDisabled}
          isPrimary={true}
          onPress={onPressSignUp}
          title={"Sign Up"}
        />

        <CustomButton
          isPrimary={false}
          onPress={onPressLogin}
          title={"Login"}
        />
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;
