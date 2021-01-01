import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AccountMenuButton from "./AccountMenuButton";
import AccountMenuScreen from "./AccountMenuScreen";
import BackButton from "./BackButton";
import CameraView from "./CameraView";
import ListPostsScreen from "./ListPostsScreen";
import LoginScreen from "./LoginScreen";
import PostSubmit from "./PostSubmit";
import SignUpScreen from "./SignUpScreen";

import { GET_POSTS_ENDPOINT } from "../api/constants";

import NavigationStyle from "../styles/NavigationStyle";

const NavigationHeader = () => {
  const Stack = createStackNavigator();

  const backButton = () => {
    return <BackButton />;
  };

  const accountMenuButton = () => {
    return <AccountMenuButton />;
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
          initialParams={{ baseUrl: GET_POSTS_ENDPOINT }}
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
