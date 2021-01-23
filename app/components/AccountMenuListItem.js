import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import PropTypes from "prop-types";

import AccountMenuStyle from "../styles/AccountMenuStyle";

export const AccountMenuItems = {
  HELP: "help",
  ABOUT: "about",
  LOG_OUT: "logOut",
};

const AccountMenuListItem = ({ menuItem, onPress }) => {
  const [icon, setIcon] = useState(null);
  const [iconBackgroundColor, setIconBackgroundColor] = useState(null);
  const [itemText, setItemText] = useState(null);

  useEffect(() => {
    updateIcon();
    updateIconBackground();
    updateItemText();
  });

  const updateIcon = () => {
    switch (menuItem) {
      case AccountMenuItems.ABOUT:
        setIcon("information-outline");
        break;
      case AccountMenuItems.HELP:
        setIcon("comment-question-outline");
        break;
      case AccountMenuItems.LOG_OUT:
        setIcon("logout");
        break;
    }
  };

  const updateIconBackground = () => {
    switch (menuItem) {
      case AccountMenuItems.ABOUT:
        setIconBackgroundColor(
          AccountMenuStyle.containerAccountMenuListItemIconAboutBackground
        );
        break;
      case AccountMenuItems.HELP:
        setIconBackgroundColor(
          AccountMenuStyle.containerAccountMenuListItemIconHelpBackground
        );
        break;
      case AccountMenuItems.LOG_OUT:
        setIconBackgroundColor(
          AccountMenuStyle.containerAccountMenuListItemIconLogOutBackground
        );
        break;
    }
  };

  const updateItemText = () => {
    switch (menuItem) {
      case AccountMenuItems.ABOUT:
        setItemText("About Us");
        break;
      case AccountMenuItems.HELP:
        setItemText("Help & Support");
        break;
      case AccountMenuItems.LOG_OUT:
        setItemText("Log Out");
        break;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={AccountMenuStyle.containerAccountMenuListItem}
    >
      <View
        style={[
          AccountMenuStyle.containerAccountMenuListItemIcon,
          iconBackgroundColor,
        ]}
      >
        <MaterialCommunityIcons
          style={AccountMenuStyle.iconAccountMenuListItem}
          name={icon}
        />
      </View>
      <Text style={AccountMenuStyle.textButtonAccountMenuListItem}>
        {itemText}
      </Text>
    </Pressable>
  );
};

AccountMenuListItem.propTypes = {
  menuItem: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AccountMenuListItem;
