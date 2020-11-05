import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import axios from "axios";
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CaptureButton from './CaptureButton'

class PostCamera extends Component {

  constructor(){
    super();
    this.state = {
      type: Camera.Constants.Type.front,      
    }
  }

  refresh(){
    console.log('back')
    this.setState({
      video: null
    })
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
    return (
        <Camera 
          style={styles.camera} 
          type={this.state.type} 
          ref={this.props.innerRef}
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

            <CaptureButton 
              onPress={this.props.toggleRecording}
            />

          </View>
        </Camera>
    );
  }
}

const styles = StyleSheet.create({
  camera:{
    flex: 1
  },
  flip: {
    fontSize: 32, 
    marginTop: 10,
    marginLeft: 5, 
    color: 'white'
  },
  topLeftButton: {

  }
});

export default React.forwardRef((props, ref) => 
  <PostCamera 
    innerRef={ref} {...props}
  />
);