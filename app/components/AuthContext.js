import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-community/async-storage";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({});

  useEffect(() => {
    const bootstrap = async () => {
      let token, expiryTime, userData;
      try {
        token = await AsyncStorage.getItem("token");
        expiryTime = await AsyncStorage.getItem("expiryTime");
        userData = await AsyncStorage.getItem("userData");
      } catch (error) {
        console.log(error);
      }

      if (new Date().getTime() / 1000 > JSON.parse(expiryTime)) {
        logOut();
      }

      setAuthState({
        token,
        expiryTime,
        userData: userData ? JSON.parse(userData) : {},
      });
    };

    bootstrap();
  }, []);

  const setStorage = async (token, expiryTime, userData) => {
    try {
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("expiryTime", JSON.stringify(expiryTime));
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.log(error);
    }

    setAuthState({ token, expiryTime, userData });
  };

  const logOut = async () => {
    const keys = ["token", "expiryTime", "userData"];

    try {
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.log(error);
    }

    setAuthState({ token: null, expiryTime: null, userData: {} });
  };

  return (
    <Provider value={{ authState, setStorage, logOut }}>{children}</Provider>
  );
};

export { AuthContext, AuthProvider };
