import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import axios from "axios";
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CaptureButton from './CaptureButton'

class PostCamera extends Component {

  constructor(){
    super();
    this.state = {
      hasCameraPermissions: null,
      recording: false,
      type: Camera.Constants.Type.front,
      video: null,
    }
  }

  async componentDidMount() {
    this.getCameraPermissions()
  }

  async getCameraPermissions(){
    let { status } = await Camera.requestPermissionsAsync();
    if (status === 'granted'){
      this.setState({
        hasCameraPermissions: status
      })
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

   async startRecording(){
    if (this.cam) {
      this.setState({ recording: true }, async () => {
        const video = await this.cam.recordAsync();
        this.setState({ video });
      });
    }
  };

  async stopRecording() {
    this.setState({ recording: false }, async () => {
      await this.cam.stopRecording()
    });
  };

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

  render(){
    if (this.state.hasCameraPermissions === null) {
      return <View />;
    }

    if (this.state.hasCameraPermissions === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera 
          style={{ flex: 1 }} 
          type={this.state.type} 
          ref={cam => (this.cam = cam)}
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
                alignSelf: 'flex-top',
                alignItems: 'center',
              }}
              onPress={() => { this.setCameraType()}}
            >
              <MaterialCommunityIcons name="camera-switch" style={styles.flip}/>
            </TouchableHighlight>

             {this.state.video && (
              <TouchableHighlight
                onPress={this.submitVideo.bind(this)}
                style={{
                  padding: 20,
                  justifyContent: "center",
                  textColor: 'white'
                }}
              >
            <Text style={{ textAlign: "center" }}>save</Text>
          </TouchableHighlight>
        )}

            <CaptureButton 
              onPress={this.toggleRecording.bind(this)}
            />

          </View>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flip: {
    fontSize: 32, 
    marginTop: 10,
    marginLeft: 5, 
    color: 'white'
  },
});

export default PostCamera;