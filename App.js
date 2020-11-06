import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListPostsScreen from "./app/components/ListPostsScreen";
import CameraView from "./app/components/CameraView"; 

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="CameraView"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="ListPostsScreen" 
          component={ListPostsScreen} 
          initialParams={{ baseUrl: "http://127.0.0.1:5000/baguette/api/v1.0/posts"}} 
        />
        <Stack.Screen name="CameraView" component={CameraView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
