import { StyleSheet } from "react-native";

import {
  colorAccountMenuListItemIconAboutBackground,
  colorAccountMenuListItemIconHelpBackground,
  colorAccountMenuListItemIconLogOutBackground,
  colorBackground,
  colorButtonAccountMenuListItemBackground,
  colorButtonUserProfilePictureBackground,
  colorTextDark,
  colorTextGreyDark,
  colorTextLight,
  fontFamilyMedium,
  fontSizeLarge,
  marginBottomDescription,
  textAlignHeader,
  textAlignDescription,
  textFontFamilyHandle,
  textFontFamilyName,
  textFontSizeHandle,
  textFontSizeName,
} from "./constants.js";

const AccountMenuStyle = StyleSheet.create({
  containerAccountMenuListItems: {
    alignItems: "center",
  },

  containerAccountMenuScreen: {
    backgroundColor: colorBackground,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  buttonUserProfilePictureBackground: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colorButtonUserProfilePictureBackground,
    borderRadius: 100,
    height: 125,
    justifyContent: "center",
    marginBottom: 10,
    width: 125,
  },

  buttonUserProfilePictureIcon: {
    fontSize: 100,
    margin: 2,
  },

  containerAccountMenuListItem: {
    alignItems: "center",
    backgroundColor: colorButtonAccountMenuListItemBackground,
    borderRadius: 7,
    flexDirection: "row",
    marginBottom: 5,
    paddingBottom: 7,
    paddingTop: 7,
    width: "90%",
  },

  containerAccountMenuListItemIcon: {
    alignItems: "center",
    borderRadius: 10,
    height: 32,
    justifyContent: "center",
    width: 32,
    marginLeft: 15,
  },

  containerAccountMenuListItemIconAboutBackground: {
    backgroundColor: colorAccountMenuListItemIconAboutBackground,
  },

  containerAccountMenuListItemIconHelpBackground: {
    backgroundColor: colorAccountMenuListItemIconHelpBackground,
  },

  containerAccountMenuListItemIconLogOutBackground: {
    backgroundColor: colorAccountMenuListItemIconLogOutBackground,
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

  textName: {
    color: colorTextGreyDark,
    fontFamily: textFontFamilyName,
    fontSize: textFontSizeName,
    textAlign: textAlignHeader,
  },

  textUserHandle: {
    color: colorTextGreyDark,
    fontFamily: textFontFamilyHandle,
    fontSize: textFontSizeHandle,
    marginBottom: marginBottomDescription,
    textAlign: textAlignDescription,
  },
});

export default AccountMenuStyle;
