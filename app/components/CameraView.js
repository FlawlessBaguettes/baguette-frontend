import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PostCamera from './PostCamera'
import { Camera } from 'expo-camera';

class CameraView extends Component{

	constructor(){
		super()
		this.state = {
			hasCameraPermissions: null,
			recording: false,
			showCamera: true,
			video: null
		}
		this.innerRef = React.createRef()
		this.camera = null
	}

	async componentDidMount() {
    	this.getCameraPermissions()
  	}

  	componentDidUpdate(){
  		if(this.innerRef){
  			this.camera = this.innerRef.current
  		}
  	}

	async getCameraPermissions(){
		let { status } = await Camera.requestPermissionsAsync();
		if (status === 'granted'){
		  this.setState({
		    hasCameraPermissions: status
		  })
		}
	}

	async startRecording(){
		if (this.camera) {
	  		this.setState({ recording: true }, async () => {
		    	const video = await this.camera.recordAsync();
		    	this.setState({ video });
		  	});
		}
	};

	async stopRecording() {
		this.setState({ recording: false }, async () => {
		  await this.camera.stopRecording()
		  if (this.state.video != null){
		    console.log(this.state.video)
		  }
		});
	};


	renderCamera(){
		const { showCamera } = this.state

		if(showCamera){
			return (
				<PostCamera 
				innerRef={this.innerRef}
				toggleRecording={this.toggleRecording.bind(this)}
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
	      return <View />;
	    }

	    if (this.state.hasCameraPermissions === false) {
	      return <Text>No access to camera</Text>;
	    }

		return(
			<View style={styles.container}>
				{this.renderCamera()}
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