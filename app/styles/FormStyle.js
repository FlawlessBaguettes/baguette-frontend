import { StyleSheet } from 'react-native';


const FormStyle = StyleSheet.create({

  container: {
      backgroundColor: "white",
      flex: 1,
      alignItems: 'center'
  },

  errorMessage: {
    color: 'red',
    fontSize: 10,
  },

  iconContainer: {
    borderColor: 'black',
    paddingLeft: 10,
    paddingTop: 8,
  },

  inputContainer: {
    flexDirection: 'row'
  },

  inputHeader: {
    width: "90%",
  },

  primaryButton: {

  },

  primaryButtonText: {
    fontSize: 24,
  },

  secondaryButton: {
    
  },

  secondaryButtonText: {
    fontSize: 12,
  },

  secureTextIcon: {
    color: 'black',
    fontSize: 24, 
  },

  textInput: {
    borderColor: 'gray', 
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: "90%"
  },

  textInputFocused: {
    borderColor: 'gray', 
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: "90%"
  }
});

export default FormStyle