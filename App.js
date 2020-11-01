import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListPostsScreen from "./app/components/ListPostsScreen";
import PostCamera from "./app/components/PostCamera"; 

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListPostsScreen">
        <Stack.Screen name="PostCamera" component={PostCamera} />
        <Stack.Screen 
          name="ListPostsScreen" 
          component={ListPostsScreen} 
          initialParams={{ baseUrl: "http://127.0.0.1:5000/baguette/api/v1.0/posts"}} />
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
