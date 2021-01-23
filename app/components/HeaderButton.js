import React, { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import PropTypes from "prop-types";

import NavigationStyle from "../styles/NavigationStyle";

export const HeaderButtonType = {
  ACCOUNT_MENU: "accountMenu",
  BACK: "back",
};

const HeaderButton = ({ headerButtonType }) => {
  const [buttonStylePressed, setButtonStylePressed] = useState(null);
  const [icon, setIcon] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    updateIcon();
  });

  const buttonComponent = () => {
    return (
      <Pressable
        style={[NavigationStyle.containerHeaderItem, buttonStylePressed]}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <View style={NavigationStyle.buttonBackground}>
          <MaterialCommunityIcons
            name={icon}
            style={NavigationStyle.buttonIcon}
          />
        </View>
      </Pressable>
    );
  };

  const onPress = () => {
    switch (headerButtonType) {
      case HeaderButtonType.ACCOUNT_MENU:
        navigation.navigate("AccountMenuScreen");
        break;
      case HeaderButtonType.BACK:
        navigation.goBack();
        break;
    }
  };

  const onPressIn = () => {
    setButtonStylePressed(NavigationStyle.buttonPressed);
  };

  const onPressOut = () => {
    setButtonStylePressed(null);
  };

  const render = () => {
    switch (headerButtonType) {
      case HeaderButtonType.BACK:
        return navigation.canGoBack() && buttonComponent();
        break;
      default:
        return buttonComponent();
        break;
    }
  };

  const updateIcon = () => {
    switch (headerButtonType) {
      case HeaderButtonType.ACCOUNT_MENU:
        setIcon("account");
        break;
      case HeaderButtonType.BACK:
        setIcon("chevron-left");
        break;
    }
  };

  return <View>{render()}</View>;
};

HeaderButton.propTypes = {
  headerButtonType: PropTypes.string.isRequired,
};

export default HeaderButton;
