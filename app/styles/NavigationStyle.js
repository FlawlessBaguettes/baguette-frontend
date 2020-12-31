import { StyleSheet } from "react-native";

import {
  colorButtonNavigationBackground,
  fontButtonSize,
} from "./constants.js";

const NavigationStyle = StyleSheet.create({
  containerHeaderLeft: {
    marginLeft: 10,
  },

  containerHeaderRight: {
    marginRight: 10,
  },

  buttonBackBackground: {
    backgroundColor: colorButtonNavigationBackground,
    borderRadius: 50,
  },

  buttonBackChevron: {
    margin: 2,
    fontSize: fontButtonSize,
  },
});

export default NavigationStyle;
