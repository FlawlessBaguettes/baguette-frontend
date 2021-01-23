import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AccountMenuScreen from "./AccountMenuScreen";
import CameraView from "./CameraView";
import HeaderButton, { HeaderButtonType } from "./HeaderButton";
import ListPostsScreen from "./ListPostsScreen";
import LoginScreen from "./LoginScreen";
import PostSubmit from "./PostSubmit";
import SignUpScreen from "./SignUpScreen";

import NavigationStyle from "../styles/NavigationStyle";

const NavigationHeader = () => {
  const Stack = createStackNavigator();

  const backButton = () => {
    return <HeaderButton headerButtonType={HeaderButtonType.BACK} />;
  };

  const accountMenuButton = () => {
    return <HeaderButton headerButtonType={HeaderButtonType.ACCOUNT_MENU} />;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListPostsScreen">
        <Stack.Screen
          name="CameraView"
          component={CameraView}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListPostsScreen"
          component={ListPostsScreen}
          options={{
            title: "Baguette",
            headerLeft: backButton,
            headerRight: accountMenuButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
        <Stack.Screen
          name="AccountMenuScreen"
          component={AccountMenuScreen}
          options={{
            title: "Account Menu",
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
        <Stack.Screen
          name="PostSubmit"
          component={PostSubmit}
          options={{
            title: "Post",
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHeader;
