import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import CameraStyle from '../styles/CameraStyle'

class CaptureButton extends Component{

  constructor(){
    super();
    this.state = {
      recording: false
  	}
	}

  captureButtonInnerStyle(){
		var captureButtonInnerColor = 'white';
		if (!this.state.recording){
			captureButtonInnerColor = 'white'
		} else{
			captureButtonInnerColor = 'red'
		}
		return{
			height: 55, 
	    width: 55,
	    borderRadius: 50,
	    backgroundColor: captureButtonInnerColor
		}
	}

	onPress(){
    this.props.onPress()
		this.setState({
			recording: !this.state.recording
		})
	}

  render(){
    return(
      <View style={styles.container}>
		    <TouchableOpacity onPress={this.onPress.bind(this)} >
          <View style={CameraStyle.captureButtonOuter} >
            <View style={this.captureButtonInnerStyle()} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});

export default CaptureButton;