import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import { Camera } from 'expo-camera'
import { StatusBar } from 'expo-status-bar'
import PostCamera from './PostCamera'
import PostPreview from './PostPreview'

class CameraView extends Component{

	_isMounted = false;

	constructor(){
		super()
		this.state = {
			hasCameraPermissions: null,
			recording: false,
			showCamera: true,
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


	renderCamera(){
		const { showCamera } = this.state

		if(showCamera){
			return (
				<PostCamera 
				cameraRef={this.cameraRef}
				goBack={this.goBack.bind(this)}
				toggleRecording={this.toggleRecording.bind(this)}
				/>
			)
		}else{
			return null;
		}
	}

	renderPreview(){
		const { showCamera, video } = this.state
		if(!showCamera && video){
			return (
				<PostPreview 
					cancelPreview={this.cancelPreview.bind(this)}
					uri={video.uri}
				/>
			)
		}else{
			return null;
		}
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
				{this.renderCamera()}
				{this.renderPreview()}
			</View>
		)
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default CameraView;