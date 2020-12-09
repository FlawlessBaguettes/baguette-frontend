import React, { Component } from "react";
import { ScrollView, View } from "react-native";

import DateInput from "./DateInput";
import FormTextInput from "./FormTextInput";
import CTAButton from "./CTAButton";

import FormStyle from "../styles/FormStyle";

import {
  validateDateOfBirth,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePasswordStrong,
  validateUsername,
} from "../utils/FormValidation";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateOfBirth: null,
      email: null,
      firstName: null,
      isSignUpButtonDisabled: true,
      lastName: null,
      password: null,
      username: null,
    };
  }

  componentDidUpdate() {
    this.updateSignUpButton();
  }

  handleEmail = (text) => {
    this.setState({ email: text });
  };

  handleDateOfBirth = (date) => {
    this.setState({ dateOfBirth: date });
  };

  handleFirstName = (text) => {
    this.setState({ firstName: text });
  };

  handleLastName = (text) => {
    this.setState({ lastName: text });
  };

  handlePassword = (text) => {
    this.setState({ password: text });
  };

  handleUsername = (text) => {
    this.setState({ username: text });
  };

  onPressLogin = () => {
    this.props.navigation.navigate("LoginScreen");
  };

  onPressSignUp = () => {
    const validForm = this.validateForm();

    if (validForm) {
      true;
    }
  };

  updateSignUpButton() {
    const { isSignUpButtonDisabled } = this.state;
    const formValidation = this.validateForm();

    if (isSignUpButtonDisabled === true && formValidation) {
      this.setState({
        isSignUpButtonDisabled: false,
      });
    } else if (isSignUpButtonDisabled === false && !formValidation) {
      this.setState({
        isSignUpButtonDisabled: true,
      });
    }
  }

  validateForm() {
    const {
      dateOfBirth,
      email,
      firstName,
      lastName,
      password,
      isSignUpButtonDisabled,
      username,
    } = this.state;
    return (
      validateDateOfBirth(dateOfBirth) === true &&
      validateEmail(email) === true &&
      validateFirstName(firstName) === true &&
      validateLastName(lastName) === true &&
      validatePasswordStrong(password) === true &&
      validateUsername(username) === true
    );
  }

  render() {
    const { dateOfBirth, isSignUpButtonDisabled } = this.state;
    return (
      <ScrollView contentContainerStyle={FormStyle.container}>
        <View style={FormStyle.formsContainer}>
          <FormTextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            autoFocus={true}
            clearTextOnFocus={false}
            header={"First Name"}
            onChangeText={this.handleFirstName}
            validateInput={validateFirstName}
          />

          <FormTextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            clearTextOnFocus={false}
            header={"Last Name"}
            onChangeText={this.handleLastName}
            validateInput={validateLastName}
          />

          <FormTextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            clearTextOnFocus={false}
            header={"Email"}
            onChangeText={this.handleEmail}
            validateInput={validateEmail}
          />

          <FormTextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            clearTextOnFocus={false}
            header={"Username"}
            onChangeText={this.handleUsername}
            validateInput={validateUsername}
          />

          <FormTextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            clearTextOnFocus={false}
            header={"Password"}
            onChangeText={this.handlePassword}
            secureTextEntry={true}
            validateInput={validatePasswordStrong}
          />

          <DateInput
            date={dateOfBirth}
            handleConfirm={this.handleDateOfBirth}
            header={"Date of Birth"}
            validateInput={validateDateOfBirth}
          />
        </View>

        <View style={FormStyle.buttonsContainer}>
          <CTAButton
            disabled={isSignUpButtonDisabled}
            isPrimary={true}
            onPress={this.onPressSignUp}
            title={"Sign Up"}
          />

          <CTAButton
            isPrimary={false}
            onPress={this.onPressLogin}
            title={"Login"}
          />
        </View>
      </ScrollView>
    );
  }
}

export default SignUpScreen;
