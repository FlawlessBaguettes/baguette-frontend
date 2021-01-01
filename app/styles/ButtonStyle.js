import { StyleSheet } from "react-native";

import {
  colorButtonPrimary,
  colorTextDark,
  colorTextGreyDark,
  colorTextLight,
  fontFamilyMedium,
  fontSizeExtraLarge,
  fontSizeLarge,
} from "./constants.js";

const ButtonStyle = StyleSheet.create({
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

  buttonPrimaryPressed: {
    opacity: 0.75,
  },

  textButtonPrimary: {
    alignSelf: "center",
    color: colorTextLight,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
  },

  textButtonSecondary: {
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeLarge,
  },

  textButtonSecondaryDisabled: {
    color: colorTextGreyDark,
  },

  textButtonSecondaryEnabled: {
    color: colorTextDark,
  },

  textButtonSecondaryPressed: {
    opacity: 0.25,
  },
});

export default ButtonStyle;
