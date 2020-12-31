import React from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import NavigationStyle from "../styles/NavigationStyle";

const BackButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <Pressable style={NavigationStyle.containerHeaderLeft}>
      <View style={NavigationStyle.buttonBackBackground}>
        <MaterialCommunityIcons
          name="chevron-left"
          onPress={onPress}
          style={NavigationStyle.buttonBackChevron}
        />
      </View>
    </Pressable>
  );
};

export default BackButton;
