import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BackButton from "./BackButton";
import CameraView from "./CameraView";
import ListPostsScreen from "./ListPostsScreen";
import LoginScreen from "./LoginScreen";
import PostSubmit from "./PostSubmit";
import SignUpScreen from "./SignUpScreen";

import { GET_POSTS_ENDPOINT } from "../api/constants";

const NavigationHeader = () => {

  const Stack = createStackNavigator();
  console.log(Stack.Screen.navigation)

  const backButton = (navigation) => {
    return(
      <BackButton navigation={navigation} />
    )
  }

  return(
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
              title: "Home",
            }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={({ navigation }) => ({
              title: "Sign Up",
              headerLeft: backButton,
            })}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: "Login",
            }}
          />
          <Stack.Screen
            name="PostSubmit"
            component={PostSubmit}
            options={{
              title: "Post",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default NavigationHeader;