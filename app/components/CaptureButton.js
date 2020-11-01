import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class CaptureButton extends Component{

	render(){

		return(
			<TouchableHighlight
	            activeOpacity={0.6}
	            style={{
	              flex: 1,
	              alignSelf: 'flex-end',
	              alignItems: 'center',
	            }}
	            onPress={() => {
	              null
	            }}
            >
            	<MaterialCommunityIcons name="circle-outline" style={styles.capture_button}/>
          	</TouchableHighlight>
          )
      }

};

const styles = StyleSheet.create({
  capture_button: {
    fontSize: 70, 
    paddingBottom: 50,
    color: 'white'
  },
});

export default CaptureButton;