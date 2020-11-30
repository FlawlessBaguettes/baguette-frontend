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
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "gray",
    borderBottomWidth: 1,
    borderEndWidth: 0,
    borderStartWidth: 0,
    borderTopWidth: 0,
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
    fontSize: 12,
    paddingBottom: 7,
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
    borderColor: "black",
    paddingLeft: 10,
    paddingTop: 8,
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

  inputHeader: {
    fontSize: 14,
  },

  secureTextIcon: {
    color: "black",
    fontSize: 24,
  },

  textInput: {
    borderColor: "gray",
    borderBottomWidth: 1,
    borderEndWidth: 0,
    borderStartWidth: 0,
    borderTopWidth: 0,
    borderRadius: 5,
    height: 40,
    width: "90%",
  },

  textInputFocused: {
    borderColor: "gray",
    borderBottomWidth: 2,
    borderEndWidth: 0,
    borderStartWidth: 0,
    borderTopWidth: 0,
    borderRadius: 5,
    height: 40,
    width: "90%",
  },
});

export default FormStyle;
