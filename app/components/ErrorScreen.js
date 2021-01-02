import React from "react";
import { Text, View } from "react-native";

import CustomButton from "./CustomButton";

import FormStyle from "../styles/FormStyle";

const ErrorScreen = ({ onRefresh }) => {
  const onPressRefresh = () => {
    onRefresh();
  };

  return (
    <View style={FormStyle.containerDisclaimer}>
      <Text style={FormStyle.textDisclaimerHeader}>
        Whoops!{"\n"} Looks like something isn't right.
      </Text>
      <Text style={FormStyle.textDisclaimerBody}>
        Try refreshing the page to fix the issue.
      </Text>
      <View style={FormStyle.containerButtons}>
        <CustomButton
          isPrimary={true}
          onPress={onPressRefresh}
          title={"Refresh"}
        />
      </View>
    </View>
  );
};

export default ErrorScreen;
