import { StyleSheet } from "react-native";

import {
  fontFamilyRegular,
  fontSizeExtraLarge,
  fontSizeLarge,
  colorPrimaryButton,
} from "./constants.js";

const ButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },

  primaryButton: {
    backgroundColor: colorPrimaryButton,
    borderRadius: 5,
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10,
    width: "85%",
  },

  primaryButtonDisabled: {
    opacity: 0.25,
  },

  primaryButtonEnabled: {
    opacity: 1,
  },

  primaryButtonText: {
    alignSelf: "center",
    color: "white",
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeExtraLarge,
  },

  secondaryButton: {},

  secondaryButtonDisabled: {},

  secondaryButtonEnabled: {},

  secondaryButtonText: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeLarge,
  },
});

export default ButtonStyle;
