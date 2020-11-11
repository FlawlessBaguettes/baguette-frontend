import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CameraStyle from '../styles/CameraStyle'

class PostPreview extends Component {
	constructor() {
		super()
	}

	render() {
		var { uri } = this.props

		return(
			<View
				style={styles.container}
			>		
				<StatusBar hidden='true' translucent='true' />
     			<Video
 					source={{uri: uri}}
	 				rate={1.0}
				  	volume={1.0}
					isMuted={false}
					resizeMode={Video.RESIZE_MODE_COVER}
					shouldPlay={true}
					isLooping={true}
				    style={styles.container}
 				/>
  				<TouchableHighlight
		                style={CameraStyle.buttonArea}
	                	onPress={this.props.cancelPreview}
          		>
    				<MaterialCommunityIcons name='close' style={CameraStyle.button} />
  				</TouchableHighlight>

  				<TouchableHighlight
		                style={CameraStyle.topRightButton}
	                	onPress={this.props.submitVideo}
          		>
    				<Text style={CameraStyle.button}>Post</Text>
  				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
  	flex: 1
  },
});

export default PostPreview;