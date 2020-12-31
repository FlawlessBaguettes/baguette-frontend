import { StyleSheet } from "react-native";

import {
  colorBackground,
  colorInputFocused,
  colorInputUnfocused,
  colorTextDark,
  colorTextError,
  colorTextGreyDark,
  fontFamilyMedium,
  fontSizeMedium,
  fontSizeSmall,
} from "./constants.js";

const FormStyle = StyleSheet.create({
  buttonsContainer: {
    alignItems: "center",
    marginBottom: 36,
    width: "100%",
  },

  calendarIcon: {
    color: colorTextGreyDark,
    fontSize: 24,
    padding: 10,
  },

  container: {
    backgroundColor: colorBackground,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  dateContainer: {
    alignItems: "center",
    borderColor: colorInputUnfocused,
    borderRadius: 5,
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "center",
  },

  dateTextField: {
    flex: 1,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },

  errorMessage: {
    color: colorTextError,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeSmall,
    marginBottom: 7,
    paddingLeft: 3,
    paddingTop: 3,
  },

  formsContainer: {
    paddingTop: 10,
  },

  formTextInputContainer: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 3,
    height: 40,
  },

  formTextInputContainerColor: {
    borderColor: colorInputUnfocused,
  },

  formTextInputContainerColorFocused: {
    borderColor: colorInputFocused,
  },

  iconContainer: {
    paddingTop: 6,
    paddingLeft: 5,
    paddingRight: 5,
  },

  inputContainerSmall: {
    width: "50%",
    alignSelf: "center",
  },

  inputContainerMedium: {
    width: "75%",
    alignSelf: "center",
  },

  inputContainerLarge: {
    width: "90%",
    alignSelf: "center",
  },

  inputHeaderText: {
    color: colorTextGreyDark,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
    marginBottom: 3,
  },

  secureTextIcon: {
    color: colorTextGreyDark,
    fontSize: 24,
  },

  textInput: {
    flex: 1,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
    marginLeft: 10,
  },
});

export default FormStyle;
