import { StyleSheet } from "react-native";

import {
  colorButtonAccountMenuListItemBackground,
  colorButtonPrimary,
  colorTextDark,
  colorTextGrey,
  colorTextGreyDark,
  colorTextLight,
  fontFamilyMedium,
  fontSizeExtraLarge,
  fontSizeLarge,
  fontSizeMedium,
  opacityDisabled,
  opacityEnabled,
} from "./constants.js";

const ButtonStyle = StyleSheet.create({

  containerAccountMenuListItem: {
    alignItems: "center",
    backgroundColor: colorButtonAccountMenuListItemBackground,
    borderRadius: 7,
    flexDirection: "row",
    marginBottom: 5,
    paddingBottom: 7,
    paddingTop: 7,
    width: 325,
  },

  containerAccountMenuListItemIcon: {
    alignItems: "center",
    backgroundColor: colorTextGreyDark,
    borderRadius: 10,
    height: 32,
    justifyContent: "center",
    width: 32,
    marginLeft: 15,
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
    opacity: opacityDisabled,
  },

  buttonPrimaryEnabled: {
    opacity: opacityEnabled,
  },

  buttonPrimaryPressed: {
    opacity: opacityDisabled,
  },

  iconAccountMenuListItem: {
    color: colorTextLight,
    fontSize: 22,
  },

  textButtonAccountMenuListItem: {
    color: colorTextDark,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeLarge,
    marginLeft: 15,
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
