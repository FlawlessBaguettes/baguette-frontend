import { StyleSheet } from "react-native";

import {
  colorBackground,
  colorButtonUserProfilePictureBackground,
  colorInputFocused,
  colorInputUnfocused,
  colorTextError,
  colorTextGreyDark,
  fontButtonSize,
  fontFamilyMedium,
  fontSizeMedium,
  fontSizeSmall,
  marginBottomDescription,
  marginBottomHeader,
  textAlignDescription,
  textAlignHeader,
  textFontFamilyDescription,
  textFontFamilyHandle,
  textFontFamilyHeader,
  textFontFamilyName,
  textFontSizeDescription,
  textFontSizeHandle,
  textFontSizeHeader,
  textFontSizeName,
} from "./constants.js";

const FormStyle = StyleSheet.create({
  buttonUserProfilePictureBackground: {
    backgroundColor: colorButtonUserProfilePictureBackground,
    borderRadius: 100,
    height: 125,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },

  buttonUserProfilePictureIcon: {
    margin: 2,
    fontSize: 100,
  },

  container: {
    backgroundColor: colorBackground,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  containerAccountMenuScreen: {
    backgroundColor: colorBackground,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  containerAccountMenuListItems: {
    alignItems: "center",
  },

  containerButtons: {
    alignItems: "center",
    marginBottom: 36,
    width: "100%",
  },

  containerDate: {
    alignItems: "center",
    borderColor: colorInputUnfocused,
    borderRadius: 5,
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "center",
  },

  containerDisclaimer: {
    paddingHorizontal: 10,
  },

  containerForm: {
    paddingTop: 10,
  },

  containerFormTextInput: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 3,
    height: 40,
  },

  containerFormTextInputColorFocused: {
    borderColor: colorInputFocused,
  },

  containerFormTextInputColorUnfocused: {
    borderColor: colorInputUnfocused,
  },

  containerIcon: {
    paddingTop: 6,
    paddingLeft: 5,
    paddingRight: 5,
  },

  containerInputSmall: {
    width: "50%",
    alignSelf: "center",
  },

  containerInputMedium: {
    width: "75%",
    alignSelf: "center",
  },

  containerInputLarge: {
    width: "90%",
    alignSelf: "center",
  },

  containerUserDetails: {
    marginBottom: 50,
  },

  iconCalendar: {
    color: colorTextGreyDark,
    fontSize: 24,
    padding: 10,
  },

  iconSecureText: {
    color: colorTextGreyDark,
    fontSize: 24,
  },

  textDateField: {
    flex: 1,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },

  textDisclaimerDescription: {
    color: colorTextGreyDark,
    fontFamily: textFontFamilyDescription,
    fontSize: textFontSizeDescription,
    marginBottom: marginBottomDescription,
    textAlign: textAlignDescription,
  },

  textDisclaimerHeader: {
    color: colorTextGreyDark,
    fontFamily: textFontFamilyHeader,
    fontSize: textFontSizeHeader,
    marginBottom: marginBottomHeader,
    textAlign: textAlignHeader,
  },

  textErrorMessage: {
    color: colorTextError,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeSmall,
    marginBottom: 7,
    paddingLeft: 3,
    paddingTop: 3,
  },


  textUserHandle: {
    color: colorTextGreyDark,
    fontFamily: textFontFamilyHandle,
    fontSize: textFontSizeHandle,
    marginBottom: marginBottomDescription,
    textAlign: textAlignDescription,
  },

  textInput: {
    flex: 1,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
    marginLeft: 10,
  },

  textInputHeader: {
    color: colorTextGreyDark,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
    marginBottom: 3,
  },

  textName: {
    color: colorTextGreyDark,
    fontFamily: textFontFamilyName,
    fontSize: textFontSizeName,
    textAlign: textAlignHeader,
  },
});

export default FormStyle;
