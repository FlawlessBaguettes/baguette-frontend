import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from "axios";
import CaptureButton from './CaptureButton'
import CameraStyle from '../styles/CameraStyle'

class PostCamera extends Component {

  constructor(){
    super();
    this.state = {
      type: Camera.Constants.Type.front,      
    }
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

  render(){
    console.log(CameraStyle)
    return (
        <Camera 
          style={styles.container} 
          type={this.state.type} 
          ref={this.props.cameraRef}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            
            <TouchableHighlight
              activeOpacity={0.6}
              style={{
                flex: 0.15,
                end: 10,
                position: 'absolute',
                justifyContent: "center",
              }}
              onPress={() => {this.setCameraType()}}
            >
              <MaterialCommunityIcons name="camera-switch" style={CameraStyle.button}/>
            </TouchableHighlight>

            <TouchableHighlight
              activeOpacity={0.6}
              style={CameraStyle.buttonArea}
              onPress={() => {this.props.goBack}}
            >
              <MaterialCommunityIcons name="keyboard-backspace" style={CameraStyle.button}/>
            </TouchableHighlight>

            <CaptureButton 
              onPress={this.props.toggleRecording}
            />

          </View>
        </Camera>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
});

export default React.forwardRef((props, ref) => 
  <PostCamera 
    cameraRef={ref} {...props}
  />
);