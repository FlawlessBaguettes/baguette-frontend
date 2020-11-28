import React, { Component } from "react";
import { View } from "react-native";

import FormTextInput from "./FormTextInput";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

import FormStyle from "../styles/FormStyle";

import { validateEmail, validatePasswordWeak } from "../utils/FormValidation";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isLoginButtonDisabled: true,
      password: "",
    };
  }

  componentDidUpdate() {
    this.updateLoginButton();
  }

  handleEmail = (text) => {
    this.setState({ email: text });
  };

  handlePassword = (text) => {
    this.setState({ password: text });
  };

  onPressLogin = () => {
    const validForm = this.validateForm();

    if (validForm) {
      true;
    }
  };

  onPressSignUp = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  updateLoginButton() {
    const { isLoginButtonDisabled } = this.state;
    const validForm = this.validateForm();

    if (isLoginButtonDisabled == true && validForm) {
      this.setState({
        isLoginButtonDisabled: false,
      });
    } else if (isLoginButtonDisabled == false && !validForm) {
      this.setState({
        isLoginButtonDisabled: true,
      });
    }
  }

  validateForm() {
    const { email, password } = this.state;
    return (
      validateEmail(email) == true && validatePasswordWeak(password) == true
    );
  }

  render() {
    const { isLoginButtonDisabled } = this.state;

    return (
      <View style={FormStyle.container}>
        <View style={FormStyle.formsContainer}>
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
            header={"Password"}
            onChangeText={this.handlePassword}
            secureTextEntry={true}
            validateInput={validatePasswordWeak}
          />
        </View>

        <View style={FormStyle.buttonsContainer}>
          <PrimaryButton
            disabled={isLoginButtonDisabled}
            onPress={this.onPressLogin}
            title={"Login"}
          />

          <SecondaryButton onPress={this.onPressSignUp} title={"Sign Up"} />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
