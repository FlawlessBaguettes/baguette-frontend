import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

import CameraView from "./app/components/CameraView";
import ListPostsScreen from "./app/components/ListPostsScreen";
import LoginScreen from "./app/components/LoginScreen";
import SignUpScreen from "./app/components/SignUpScreen";

import { GET_POSTS_ENDPOINT } from "./app/api/constants";

const Stack = createStackNavigator();

export default App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  return (
    <SafeAreaProvider>
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
            options={{
              title: "Sign Up",
            }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: "Login",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
