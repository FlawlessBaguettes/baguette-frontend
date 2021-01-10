import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import NavigationStyle from "../styles/NavigationStyle";

const BackButton = () => {
  const [buttonStylePressed, setButtonStylePressed] = useState(null);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  const onPressIn = () => {
    setButtonStylePressed(NavigationStyle.buttonPressed);
  };

  const onPressOut = () => {
    setButtonStylePressed(null);
  };

  const backButton = () => {
    return (
      <Pressable
        style={[NavigationStyle.containerHeaderItem, buttonStylePressed]}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <View style={NavigationStyle.buttonBackground}>
          <MaterialCommunityIcons
            name="chevron-left"
            style={NavigationStyle.buttonIcon}
          />
        </View>
      </Pressable>
    );
  };

  return <View>{navigation.canGoBack() && backButton()}</View>;
};

export default BackButton;