import { StyleSheet } from "react-native";

import {
  colorBackground,
  colorInputFocused,
  colorInputUnfocused,
  colorTextDark,
  colorTextError,
  colorTextGreyDark,
  fontFamilyMedium,
  fontFamilyRegular,
  fontSizeExtraLarge,
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
} from "./constants.js";

const FormStyle = StyleSheet.create({
  container: {
    backgroundColor: colorBackground,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
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
    backgroundColor: colorBackground,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
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

  textDisclaimerBody: {
    color: colorTextGreyDark,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeLarge,
    textAlign: "center",
  },

  textDisclaimerHeader: {
    color: colorTextGreyDark,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
    marginBottom: 15,
    textAlign: "center",
  },

  textErrorMessage: {
    color: colorTextError,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeSmall,
    marginBottom: 7,
    paddingLeft: 3,
    paddingTop: 3,
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
});

export default FormStyle;
