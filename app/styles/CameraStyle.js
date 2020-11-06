import { StyleSheet } from 'react-native';


const CameraStyle = StyleSheet.create({

  buttonArea:{
  	flex: 0.15,
  	position: "absolute",
	justifyContent: "center",
  },

  button: {
  	color: 'white',
  	textAlign: 'center',
  	fontSize: 32, 
    marginTop: 10,
    marginLeft: 5,
  },

  topRightButton: {
  	end: 10
  }
});

export default CameraStyle