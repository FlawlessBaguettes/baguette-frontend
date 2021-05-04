import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './app/components/AuthContext';
import NavigationHeader from './app/components/NavigationHeader';

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar hidden={false} transparent={true} style={'light'} />
        <NavigationHeader />
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;
