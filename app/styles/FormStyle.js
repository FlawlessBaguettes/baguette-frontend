import { StyleSheet } from 'react-native';


const FormStyle = StyleSheet.create({
  container: {
      backgroundColor: "white",
      flex: 1,
      alignItems: 'center'
  },

  errorMessage:{
    color: 'red',
    fontSize: 10,
  },

  inputHeader:{
    width: "75%"
  },

  textInput:{
    borderColor: 'gray', 
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
  },

  textInputFocused:{
    borderColor: 'gray', 
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
  }
});

export default FormStyle