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
    backgroundColor: colorInputUnfocused,
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
    paddingTop: 10,
  },

  formTextInputContainer: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 0,
    height: 40,
  },

  formTextInputContainerColor: {
    backgroundColor: colorInputUnfocused,
  },

  formTextInputContainerColorFocused: {
    backgroundColor: colorInputFocused,
  },

  iconContainer: {
    paddingTop: 10,
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
    color: colorTextDark,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    marginBottom: 3,
  },

  secureTextIcon: {
    fontSize: 24,
  },

  textInput: {
    flex: 1,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    marginLeft: 10,
  },
});

export default FormStyle;
