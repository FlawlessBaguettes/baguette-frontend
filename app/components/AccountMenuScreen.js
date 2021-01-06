import React, { useState } from "react";
import { Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomButton from "./CustomButton";
import AccountMenuListItem from "./AccountMenuListItem";

import FormStyle from "../styles/FormStyle";

const AccountMenuScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [withColor, setWithColor] = useState(true);
  const [withColorButton, setWithColorButton] = useState("Remove Color");

  const onPressAboutUs = () => {
    console.log("About Us");
  };

  const onPressHelp = () => {
    console.log("Help");
  };

  const onPressLogin = () => {
    setIsLoggedin(true);
    // navigation.navigate("LoginScreen");
  };

  const onPressLogout = () => {
    console.log("Log Out");
    setIsLoggedin(false);
  };

  const onPressSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  const onPressWithColor = () => {
    console.log("Before", withColor, withColorButton);
    if (withColor) {
      setWithColor(false);
      setWithColorButton("Add Color");
    } else {
      setWithColor(true);
      setWithColorButton("Remove Color");
    }
    console.log("After", withColor, withColorButton);
  };

  const registrationDisclaimer = () => {
    return (
      <View style={FormStyle.containerDisclaimer}>
        <Text style={FormStyle.textDisclaimerHeader}>
          Hey!{"\n"} Looks like you don't have an account yet.
        </Text>
        <Text style={FormStyle.textDisclaimerDescription}>
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

  const userDetails = () => {
    return (
      <View style={FormStyle.containerUserDetails}>
        <View style={FormStyle.buttonUserProfilePictureBackground}>
          <MaterialCommunityIcons
            name="account"
            style={FormStyle.buttonUserProfilePictureIcon}
          />
        </View>
        <Text style={FormStyle.textName}>John Doe</Text>
        <Text style={FormStyle.textUserHandle}>@jdoe</Text>
      </View>
    );
  };

  return (
    <View style={FormStyle.containerAccountMenuScreen}>
      {!isLoggedIn && registrationDisclaimer()}
      {isLoggedIn && userDetails()}
      <View style={FormStyle.containerAccountMenuListItems}>
        <AccountMenuListItem
          iconName={"comment-question-outline"}
          iconBackgroundColor={"#d10812"}
          itemText={withColorButton}
          onPress={onPressWithColor}
          withColor={withColor}
        />

        <AccountMenuListItem
          iconName={"comment-question-outline"}
          iconBackgroundColor={"#7209b7"}
          itemText={"Help & Support"}
          onPress={onPressHelp}
          withColor={withColor}
        />

        <AccountMenuListItem
          iconName={"information-outline"}
          iconBackgroundColor={"#3a0ca3"}
          itemText={"About Us"}
          onPress={onPressAboutUs}
          withColor={withColor}
        />

        {isLoggedIn && (
          <AccountMenuListItem
            iconName={"logout"}
            iconBackgroundColor={"#4cc9f0"}
            itemText={"Log Out"}
            onPress={onPressLogout}
            withColor={withColor}
          />
        )}
      </View>
    </View>
  );
};

export default AccountMenuScreen;
