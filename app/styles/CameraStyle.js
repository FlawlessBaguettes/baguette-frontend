import { StyleSheet } from 'react-native';


const CameraStyle = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
  },

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
  	left: 330,
    position: 'absolute',
  }
});

export default CameraStyle