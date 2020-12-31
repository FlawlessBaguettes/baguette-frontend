import React from "react";
import { Pressable, View } from "react-native";
import PropTypes from 'prop-types';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import NavigationStyle from "../styles/NavigationStyle";

const BackButton = ({navigation}) => {

  const onPress = () => {
    navigation.goBack()
  }

  return(
    <Pressable style={NavigationStyle.containerButtonBack}>
      <View style={NavigationStyle.buttonBackBackground}>
        <MaterialCommunityIcons
          name="chevron-left"
          onPress={onPress}
          style={NavigationStyle.buttonBackChevron}
        />
        </View>
    </Pressable>
  );
}

BackButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BackButton;