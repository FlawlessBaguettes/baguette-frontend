import { StyleSheet } from "react-native";

import {
  colorBackground,
  colorInputFocused,
  colorInputUnfocused,
  colorTextDark,
  colorTextError,
  fontFamilyRegular,
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
    padding: 10,
    fontSize: 24,
  },

  container: {
    backgroundColor: colorBackground,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  dateContainer: {
    alignItems: "center",
    backgroundColor: colorInputFocused,
    borderRadius: 5,
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "center",
  },

  dateTextField: {
    flex: 1,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },

  errorMessage: {
    color: colorTextError,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeSmall,
    marginBottom: 7,
    paddingLeft: 3,
    paddingTop: 3,
  },

  formsContainer: {
    padding: 10,
  },

  formTextInputContainer: {
    flexDirection: "row",
  },

  iconContainer: {
    paddingLeft: 10,
    paddingTop: 10,
  },

  inputContainerSmall: {
    width: 200,
  },

  inputContainerMedium: {
    width: 250,
  },

  inputContainerLarge: {
    width: 300,
  },

  inputHeaderText: {
    color: colorTextDark,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    marginBottom: 3,
  },

  secureTextIcon: {
    fontSize: 24,
  },

  textInput: {
    backgroundColor: colorInputFocused,
    borderRadius: 5,
    borderWidth: 0,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    height: 40,
    paddingLeft: 15,
    width: "90%",
  },

  textInputFocused: {
    backgroundColor: colorInputUnfocused,
    borderRadius: 5,
    borderWidth: 0,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    height: 40,
    paddingLeft: 15,
    width: "90%",
  },
});

export default FormStyle;
