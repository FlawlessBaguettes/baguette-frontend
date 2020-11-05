import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Video } from 'expo-av';

class PostPreview extends Component {
	constructor() {
		super()
	}

	submitVideo() {
    console.log(this.state)
    if (this.state.video) {
      var uri = this.state.video.uri
      var uriParts = uri.split('/')
      var filename = uriParts[uriParts.length - 1]

      var bodyFormData = new FormData();
      bodyFormData.append('video', uri); 

      // axios({
      //   method: 'post',
      //   url: 'http://127.0.0.1:5000/baguette/api/v1.0/posts',
      //   data: bodyFormData,
      //   headers: {'Content-Type': 'multipart/form-data' }
      //   })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (response) {
      //   console.log(response);
      // });

      this.setState({ 
        video: null
      });
    }
  }

	render() {
		var uri = this.props.route.params.uri
		console.log(uri)
		return(
			<View>
				
         		{uri && (
         			<Video
	 					source={{uri: uri}}
		 				rate={1.0}
					  	volume={1.0}
						isMuted={false}
						resizeMode={Video.RESIZE_MODE_COVER}
						shouldPlay={true}
						isLooping={true}
					    style={{ flex: 1 }}
     				/>
      //     		<TouchableHighlight
	     //            style={{
	     //              padding: 20,
	     //              justifyContent: "center",
	     //              textColor: 'black'
      //           	}}
      //     		>
      //   			<Text style={{ textAlign: "center" }}>save</Text>
  				// </TouchableHighlight>
        		)}
			</View>
		);
	}
}

export default PostPreview;