import { StyleSheet } from 'react-native';


const CameraStyle = StyleSheet.create({

  safeAreaView:{
    flexDirection: 'row',
    position: 'absolute',
  },

  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  topLeftButton:{
    paddingLeft: 15,
  },

  iconButton: {
  	color: 'white',
  	textAlign: 'center',
  	fontSize: 32, 
  },

  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24, 
  },

  topRightButton: {
    paddingRight: 15,
  }
});

export default CameraStyle