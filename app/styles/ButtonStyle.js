import { StyleSheet } from "react-native";

import {
  colorButtonPrimary,
  colorTextLight,
  fontFamilyMedium,
  fontSizeExtraLarge,
  fontSizeMedium,
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
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
  },

  buttonSecondary: {},

  buttonSecondaryDisabled: {},

  buttonSecondaryEnabled: {},

  buttonSecondaryText: {
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
  },
});

export default ButtonStyle;
