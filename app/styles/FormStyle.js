import { StyleSheet } from "react-native";

const FormStyle = StyleSheet.create({
  buttonsContainer: {
    alignItems: "center",
    width: "100%",
  },

  calendarIcon: {
    color: "black",
    padding: 10,
    fontSize: 24,
  },

  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "flex-start",
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },

  dateTextField: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },

  errorMessage: {
    color: "red",
    fontSize: 10,
    paddingBottom: 5,
  },

  formsContainer: {
    padding: 10,
  },

  formTextInputContainer: {
    flexDirection: "row",
  },

  iconContainer: {
    borderColor: "black",
    paddingLeft: 10,
    paddingTop: 8,
  },

  inputContainerSmall: {
    width: 175,
  },

  inputContainerMedium: {
    width: 250,
  },

  inputContainerLarge: {
    width: 325,
  },

  secureTextIcon: {
    color: "black",
    fontSize: 24,
  },

  textInput: {
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: "90%",
  },

  textInputFocused: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: "90%",
  },
});

export default FormStyle;
