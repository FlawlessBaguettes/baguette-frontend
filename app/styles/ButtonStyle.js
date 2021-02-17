import { StyleSheet } from "react-native";

import {
  colorButtonPrimary,
  colorTextDark,
  colorTextLight,
  fontFamilyMedium,
  fontSizeExtraLarge,
  fontSizeLarge,
  fontSizeMedium,
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
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeLarge,
    padding: 2,
  },

  textButtonSecondaryDark: {
    color: colorTextDark,
  },

  textButtonSecondaryDisabled: {
    opacity: opacityDisabled,
  },

  textButtonSecondaryEnabled: {
    opacity: opacityEnabled,
  },

  textButtonSecondaryLight: {
    color: colorTextLight,
  },

  textButtonSecondaryPressed: {
    opacity: opacityDisabled,
  },
});

export default ButtonStyle;
