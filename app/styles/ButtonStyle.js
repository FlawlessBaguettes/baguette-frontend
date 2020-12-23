import { StyleSheet } from "react-native";

import {
  fontFamilyRegular,
  fontSizeExtraLarge,
  fontSizeLarge,
  colorButtonPrimary,
  colorTextLight,
} from "./constants.js";

const ButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },

  buttonPrimary: {
    backgroundColor: colorButtonPrimary,
    borderRadius: 25,
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10,
    width: "90%",
  },

  buttonPrimaryDisabled: {
    opacity: 0.25,
  },

  buttonPrimaryEnabled: {
    opacity: 1,
  },

  buttonPrimaryText: {
    alignSelf: "center",
    color: colorTextLight,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeExtraLarge,
  },

  buttonSecondary: {},

  buttonSecondaryDisabled: {},

  buttonSecondaryEnabled: {},

  buttonSecondaryText: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeLarge,
  },
});

export default ButtonStyle;
