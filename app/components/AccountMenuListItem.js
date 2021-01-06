import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import PropTypes from "prop-types";

import ButtonStyle from "../styles/ButtonStyle";

const AccountMenuListItem = ({ iconName, iconBackgroundColor, itemText, onPress, withColor }) => {

  const iconBackgroundColorStyle = withColor ? {"backgroundColor": iconBackgroundColor} : null;


return (
  <Pressable
    onPress={onPress}
    style={ButtonStyle.containerAccountMenuListItem}
  >
    <View style={[ButtonStyle.containerAccountMenuListItemIcon, iconBackgroundColorStyle]}>
      <MaterialCommunityIcons
        style={ButtonStyle.iconAccountMenuListItem}
        name={iconName}
      />
    </View>
    <Text style={ButtonStyle.textButtonAccountMenuListItem}>{itemText}</Text>
  </Pressable>

  )
}

AccountMenuListItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconBackgroundColor: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AccountMenuListItem;