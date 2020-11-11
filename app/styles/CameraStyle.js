import { StyleSheet } from 'react-native';


const CameraStyle = StyleSheet.create({

  buttonArea:{
  	position: "absolute",
  },

  button: {
  	color: 'white',
  	textAlign: 'center',
  	fontSize: 32, 
    marginTop: 10,
    marginLeft: 5,
  },

  topRightButton: {
  	left: 100,
    position: 'absolute',
  }
});

export default CameraStyle