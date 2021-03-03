import React, { useContext, useState } from "react";
import { Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AuthContext } from "./AuthContext";
import CustomButton from "./CustomButton";
import AccountMenuListItem, { AccountMenuItems } from "./AccountMenuListItem";

import AccountMenuStyle from "../styles/AccountMenuStyle";
import FormStyle from "../styles/FormStyle";

const AccountMenuScreen = ({ navigation }) => {
  const { logOut } = useContext(AuthContext);
  const { authState } = useContext(AuthContext);

  const isLoggedIn = authState.token ? true : false;

  const onPressAboutUs = () => {
    console.log("About Us");
  };

  const onPressHelp = () => {
    console.log("Help");
  };

  const onPressLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const onPressLogout = () => {
    logOut();
  };

  const onPressSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  const registrationDisclaimer = () => {
    return (
      <View style={FormStyle.containerDisclaimer}>
        <Text style={FormStyle.textDisclaimerHeader}>
          Hey!{"\n"} Looks like you don't have an account
        </Text>
        <Text style={FormStyle.textDisclaimerDescription}>
          Sign up to join the community
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

  const userDetails = () => {
    displayName = "";
    displayHandle = "";
    if (
      authState.userData.username &&
      authState.userData.firstName &&
      authState.userData.lastName
    ) {
      displayName =
        authState.userData.firstName + " " + authState.userData.lastName;
      displayHandle = "@" + authState.userData.username;
    }

    return (
      <View style={AccountMenuStyle.containerUserDetails}>
        <View style={AccountMenuStyle.buttonUserProfilePictureBackground}>
          <MaterialCommunityIcons
            name="account"
            style={AccountMenuStyle.buttonUserProfilePictureIcon}
          />
        </View>
        <Text style={AccountMenuStyle.textName}>{displayName}</Text>
        <Text style={AccountMenuStyle.textUserHandle}>{displayHandle}</Text>
      </View>
    );
  };

  return (
    <View style={AccountMenuStyle.containerAccountMenuScreen}>
      {!isLoggedIn && registrationDisclaimer()}
      {isLoggedIn && userDetails()}
      <View style={AccountMenuStyle.containerAccountMenuListItems}>
        <AccountMenuListItem
          menuItem={AccountMenuItems.HELP}
          onPress={onPressHelp}
        />

        <AccountMenuListItem
          menuItem={AccountMenuItems.ABOUT}
          onPress={onPressAboutUs}
        />

        {isLoggedIn && (
          <AccountMenuListItem
            menuItem={AccountMenuItems.LOG_OUT}
            onPress={onPressLogout}
          />
        )}
      </View>
    </View>
  );
};

export default AccountMenuScreen;
