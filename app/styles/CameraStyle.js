import { StyleSheet } from 'react-native';


const CameraStyle = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  captureButtonOuter: {
    height: 70, 
    width: 70,
    borderWidth: 5,
    borderColor: 'white',
    marginBottom: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconButton: {
  	color: 'white',
  	textAlign: 'center',
  	fontSize: 32, 
  },

  safeAreaView:{
    flexDirection: 'row',
    position: 'absolute',
  },

  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24, 
  },

  topLeftButton:{
    paddingLeft: 15,
  },

  topRightButton: {
    paddingRight: 15,
  }
});

export default CameraStyle