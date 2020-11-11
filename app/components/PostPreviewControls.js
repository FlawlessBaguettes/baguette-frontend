import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CameraStyle from '../styles/CameraStyle'

class PostPreviewControls extends Component{
	constructor(){
		super()
	}

	render(){
		return(
			<View style={CameraStyle.container}>
				<TouchableOpacity
		                style={CameraStyle.buttonArea}
	                	onPress={this.props.cancelPreview}
          		>
    				<MaterialCommunityIcons name='close' style={CameraStyle.button} />
  				</TouchableOpacity>

  				<TouchableOpacity
		                style={CameraStyle.topRightButton}
	                	onPress={this.props.submitVideo}
          		>
    				<Text style={CameraStyle.button}>Post</Text>
  				</TouchableOpacity>
            </View>
		)
	}
}

export default PostPreviewControls