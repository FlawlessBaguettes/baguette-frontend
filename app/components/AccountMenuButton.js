import React from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import NavigationStyle from "../styles/NavigationStyle";

const AccountMenuButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AccountMenuScreen");
  };

  return (
    <Pressable style={NavigationStyle.containerHeaderRight}>
      <View style={NavigationStyle.buttonBackBackground}>
        <MaterialCommunityIcons
          name="account"
          onPress={onPress}
          style={NavigationStyle.buttonBackChevron}
        />
      </View>
    </Pressable>
  );
};

export default AccountMenuButton;
