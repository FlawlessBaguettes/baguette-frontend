import React from "react";
import { Text, View } from "react-native";

import CustomButton from "./CustomButton";

import FormStyle from "../styles/FormStyle";

const AccountMenuScreen = ({ navigation }) => {
  const onPressLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const onPressSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={FormStyle.containerDisclaimer}>
      <Text style={FormStyle.textDisclaimerHeader}>
        Hey!{"\n"} Looks like you don't have an account yet.
      </Text>
      <Text style={FormStyle.textDisclaimerBody}>
        Sign up for an account to get access to a variety of features!
      </Text>
      <View style={FormStyle.containerButtons}>
        <CustomButton
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
    </View>
  );
};

export default AccountMenuScreen;
