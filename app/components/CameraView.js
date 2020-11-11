import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { Camera } from 'expo-camera'
import { StatusBar } from 'expo-status-bar'

import axios from "axios"

import CameraControls from './CameraControls'
import PostCamera from './PostCamera'
import PostPreview from './PostPreview'
import PostPreviewControls from './PostPreviewControls'

class CameraView extends Component{

	_isMounted = false;

	constructor(){
		super()
		this.state = {
			hasCameraPermissions: null,
			recording: false,
			showCamera: true,
			type: Camera.Constants.Type.front,
			video: null
		}
		this.cameraRef = React.createRef()
	}

	async componentDidMount() {
		this._isMounted = true
    	this.getCameraPermissions()
  	}

  	componentWillUnmount() {
    	this._isMounted = false;
  	}

  	cancelPreview(){
  		this.setState({
  			showCamera: true,
  			video: null
  		})
  	}

	async getCameraPermissions(){
		let { status } = await Camera.requestPermissionsAsync();
		if (status === 'granted'){
		  this.setState({
		    hasCameraPermissions: status
		  })
		}
	}

	goBack(){
		this.props.navigation.goBack()
	}

	setCameraType(){
		if (this.state.type === Camera.Constants.Type.back) {
		  this.setState({
		    type: Camera.Constants.Type.front
		  })
		} else{
		  this.setState({
		    type: Camera.Constants.Type.back
		  })
		}
	}

	async startRecording(){
		if (this.cameraRef.current) {
	  		this.setState({ recording: true }, async () => {
		    	let video = await this.cameraRef.current.recordAsync();
		    	if (this._isMounted){
		    		await this.setState({ 
		    			video, 
		    			showCamera: false
		    		});
		    	}
		  	});
		}
	};

	async stopRecording() {
		this.setState({ recording: false }, async () => {
			await this.cameraRef.current.stopRecording()
		});
	};

	renderCameraControls(){
		const { showCamera, recording } = this.state

		if(showCamera && !recording){
			return(
				<CameraControls 
					goBack={this.goBack.bind(this)}
					setCameraType={this.setCameraType.bind(this)}
				/>
			)
		}
		else{
			return null
		}
	}

	renderPostCamera(){
		const { showCamera, type } = this.state

		if(showCamera){
			return (
				<PostCamera
					cameraRef={this.cameraRef}
					toggleRecording={this.toggleRecording.bind(this)}
					type={type}
				/>
			)
		}else{
			return null;
		}
	}

	renderPostPreview(){
		const { showCamera, video } = this.state
		if(!showCamera && video){
			return (
				<PostPreview 
					uri={video.uri}
				/>
			)
		}else{
			return null;
		}
	}

	renderPostPreviewControls(){
		const { showCamera, video } = this.state
		if(!showCamera && video){
			return (
				<PostPreviewControls 
					cancelPreview={this.cancelPreview.bind(this)}
					submitVideo={this.submitVideo.bind(this)}
				/>
			)
		}else{
			return null;
		}
	}

	submitVideo() {
		const { video } = this.state
		const uri = video.uri.replace('file://', '')
		const uriParts = uri.split('/')
		const fileName = uriParts[uriParts.length - 1]
	 	const fileNameParts = fileName.split('.');
 		const fileType = fileName[fileName.length - 1];

      	const bodyFormData = new FormData();
	    bodyFormData.append('video', {
	      uri: uri,
	      name: fileName,
	      type: `video/${fileType}`,
	    });

  		const headers = { 
  			'Content-Type': 'multipart/form-data',
  		}
  		var config = {
		  method: 'post',
		  url: 'http://4a3034da310d.ngrok.io/baguette/api/v1.0/posts',
		  headers: headers,
		  data : bodyFormData
		};

		axios(config)
		.then(function (response) {
			console.log('success')
			// console.log(response);
		})
		.catch(function (response) {
			console.log('failure')
			// console.log(response);
		});
  	}

	toggleRecording() {
    	const { recording } = this.state;
    	if (recording) {
      		this.stopRecording();
		} else {
      		this.startRecording();
    	}
  	};

	render(){
		if (this.state.hasCameraPermissions === null) {
	      return <SafeAreaView />;
	    }

	    if (this.state.hasCameraPermissions === false) {
	      return <Text>No access to camera</Text>;
	    }

		return(
			<View style={styles.container}>
				<StatusBar hidden='true' translucent='true' />
				{this.renderPostCamera()}
				{this.renderCameraControls()}
				{this.renderPostPreview()}
				{this.renderPostPreviewControls()}
			</View>
		)
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CameraView;