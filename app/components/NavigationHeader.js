import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AccountMenuScreen from './AccountMenuScreen';
import CameraView from './CameraView';
import HeaderButton, { HeaderButtonType } from './HeaderButton';
import ListPostsScreen from './ListPostsScreen';
import LoginScreen from './LoginScreen';
import PostSubmit from './PostSubmit';
import SignUpScreen from './SignUpScreen';

import NavigationStyle from '../styles/NavigationStyle';

const NavigationHeader = () => {
  const AccountStack = createStackNavigator();
  const HomeStack = createStackNavigator();
  const PostStack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const AccountMenuScreenStack = () => {
    return (
      <AccountStack.Navigator>
        <AccountStack.Screen
          name="AccountMenuScreen"
          component={AccountMenuScreen}
          options={{
            title: 'Account Menu',
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
        <AccountStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
        <AccountStack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
      </AccountStack.Navigator>
    );
  };

  const HomeScreenStack = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="ListPostsScreen"
          component={ListPostsScreen}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="CameraView"
          component={CameraView}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="PostSubmit"
          component={PostSubmit}
          options={{
            title: 'Post',
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
      </HomeStack.Navigator>
    );
  };

  const PostScreenStack = () => {
    return (
      <PostStack.Navigator>
        <PostStack.Screen
          name="CameraView"
          component={CameraView}
          // component={() => (
          //   <CameraView canGoBack={false} navigation={Tab.navigation} />
          // )}
          options={{
            headerShown: false,
          }}
        />
        <PostStack.Screen
          name="PostSubmit"
          component={PostSubmit}
          options={{
            title: 'Post',
            headerLeft: backButton,
            headerStyle: NavigationStyle.header,
            headerTitleStyle: NavigationStyle.textHeader,
          }}
        />
      </PostStack.Navigator>
    );
  };

  const backButton = () => {
    return <HeaderButton headerButtonType={HeaderButtonType.BACK} />;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Post" component={PostScreenStack} />
        <Tab.Screen name="Account" component={AccountMenuScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHeader;
