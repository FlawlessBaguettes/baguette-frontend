import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import CameraStyle from '../styles/CameraStyle'

class CameraControls extends Component{
	constructor(){
		super()
	}

	render(){
		return(
			<View style={CameraStyle.container}>

	            <TouchableOpacity
	              style={CameraStyle.buttonArea}
	              onPress={this.props.goBack}
	            >
					<MaterialCommunityIcons name="keyboard-backspace" style={CameraStyle.button}/>
            	</TouchableOpacity>

            	<TouchableOpacity
	              style={CameraStyle.topRightButton}
	              onPress={this.props.setCameraType}
	            >
					<MaterialCommunityIcons name="camera-switch" style={CameraStyle.button}/>
	            </TouchableOpacity>
            </View>
		)
	}
}

export default CameraControls