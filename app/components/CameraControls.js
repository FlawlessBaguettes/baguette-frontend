import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CameraStyle from '../styles/CameraStyle'

class CameraControls extends Component{
	constructor(){
		super()
	}

	render(){
		return(
			<View style={styles.container}>
				<TouchableHighlight
	              activeOpacity={0.6}
	              style={CameraStyle.topRightButton}
	              onPress={() => {
	              	this.props.setCameraType()
	              }}
	            >
	              <MaterialCommunityIcons name="camera-switch" style={CameraStyle.button}/>
	            </TouchableHighlight>

	            <TouchableHighlight
	              activeOpacity={0.6}
	              style={CameraStyle.buttonArea}
	              onPress={() => {this.props.goBack()}}
	            >
	              <MaterialCommunityIcons name="keyboard-backspace" style={CameraStyle.button}/>
	            </TouchableHighlight>
            </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute'
  },
});

export default CameraControls