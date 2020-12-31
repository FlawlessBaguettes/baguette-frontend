import { StyleSheet } from "react-native";

import {
  colorButtonNavigationBackground,
  fontButtonSize,
} from "./constants.js";

const NavigationStyle = StyleSheet.create({

  containerButtonBack: {
    marginLeft: 10,
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