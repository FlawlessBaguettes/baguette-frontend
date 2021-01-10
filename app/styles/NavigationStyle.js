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
  containerHeaderItem: {
    marginHorizontal: 15,
  },

  buttonBackground: {
    backgroundColor: colorButtonNavigationBackground,
    borderRadius: 50,
  },

  buttonIcon: {
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
    alignSelf: "center",
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
    color: colorTextLight,
  },
});

export default NavigationStyle;
