import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ListPostsScreen from './app/components/ListPostsScreen'
import CameraView from './app/components/CameraView'

import { GET_POSTS_ENDPOINT } from "./app/api/constants" 

const Stack = createStackNavigator();

export default App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="ListPostsScreen"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name="ListPostsScreen" 
            component={ListPostsScreen} 
            initialParams={{ baseUrl: GET_POSTS_ENDPOINT}} 
          />
          <Stack.Screen name="CameraView" component={CameraView} />
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
