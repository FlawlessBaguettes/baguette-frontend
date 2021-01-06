import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import NavigationStyle from "../styles/NavigationStyle";

const AccountMenuButton = () => {
  const [buttonStylePressed, setButtonStylePressed] = useState(null);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AccountMenuScreen");
  };

  const onPressIn = () => {
    setButtonStylePressed(NavigationStyle.buttonPressed);
  };

  const onPressOut = () => {
    setButtonStylePressed(null);
  };

  return (
    <Pressable
      style={[NavigationStyle.containerHeaderRight, buttonStylePressed]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <View style={NavigationStyle.buttonBackground}>
        <MaterialCommunityIcons
          name="account"
          style={NavigationStyle.buttonIcon}
        />
      </View>
    </Pressable>
  );
};

export default AccountMenuButton;
