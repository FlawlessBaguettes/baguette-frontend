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

	// submitVideo() {
 //    console.log(this.state)
 //    if (this.state.video) {
 //      var uri = this.state.video.uri
 //      var uriParts = uri.split('/')
 //      var filename = uriParts[uriParts.length - 1]

 //      var bodyFormData = new FormData();
 //      bodyFormData.append('video', uri); 

 //      // axios({
 //      //   method: 'post',
 //      //   url: 'http://127.0.0.1:5000/baguette/api/v1.0/posts',
 //      //   data: bodyFormData,
 //      //   headers: {'Content-Type': 'multipart/form-data' }
 //      //   })
 //      // .then(function (response) {
 //      //   console.log(response);
 //      // })
 //      // .catch(function (response) {
 //      //   console.log(response);
 //      // });

 //      this.setState({ 
 //        video: null
 //      });
 //    }
 //  }

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