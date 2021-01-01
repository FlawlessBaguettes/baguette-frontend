import { StyleSheet } from "react-native";

import {
  colorBackgroundHeader,
  colorButtonNavigationBackground,
  colorTextLight,
  fontButtonSize,
  fontFamilyMedium,
  fontSizeExtraLarge,
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

  buttonPressed: {
    opacity: 0.5,
  },

  header: {
    backgroundColor: colorBackgroundHeader,
  },

  textHeader: {
    alignSelf: 'center',
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
    color: colorTextLight,
  }
});

export default NavigationStyle;
