import { StyleSheet } from "react-native";

import {
  colorButtonPrimary,
  colorTextDark,
  colorTextLight,
  fontFamilyMedium,
  fontSizeExtraLarge,
  fontSizeLarge,
  opacityDisabled,
  opacityEnabled,
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
    opacity: opacityDisabled,
  },

  buttonPrimaryEnabled: {
    opacity: opacityEnabled,
  },

  buttonPrimaryPressed: {
    opacity: opacityDisabled,
  },

  textButtonPrimary: {
    alignSelf: "center",
    color: colorTextLight,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
  },

  textButtonSecondary: {
    color: colorTextDark,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeLarge,
  },

  textButtonSecondaryDisabled: {
    opacity: opacityDisabled,
  },

  textButtonSecondaryEnabled: {
    opacity: opacityEnabled,
  },

  textButtonSecondaryPressed: {
    opacity: opacityDisabled,
  },
});

export default ButtonStyle;
