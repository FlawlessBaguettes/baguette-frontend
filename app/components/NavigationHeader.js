import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountMenuScreen from './AccountMenuScreen';
import CameraView from './CameraView';
import HeaderButton, { HeaderButtonType } from './HeaderButton';
import ListPostsScreen from './ListPostsScreen';
import LoginScreen from './LoginScreen';
import PostSubmit from './PostSubmit';
import SignUpScreen from './SignUpScreen';

import { palettePersianRose } from '../styles/constants';
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
          component={cameraView}
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

  const cameraView = (navigation) => (
    <CameraView canGoBack={false} navigation={navigation} />
  );

  const backButton = () => {
    return <HeaderButton headerButtonType={HeaderButtonType.BACK} />;
  };

  const tabBarIcon = (color, icon) => {
    return <MaterialCommunityIcons name={icon} color={color} size={30} />;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: palettePersianRose,
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => tabBarIcon(color, 'home'),
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreenStack}
          options={{
            tabBarLabel: 'Post',
            tabBarIcon: ({ color }) => tabBarIcon(color, 'camera'),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountMenuScreenStack}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => tabBarIcon(color, 'account'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHeader;
