import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Camera } from "expo-camera";

import axios from "axios";

import CaptureButton from "./CaptureButton";
import CameraStyle from "../styles/CameraStyle";

class PostCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
    };
  }

  handleChange(event) {
    const { type } = this.state;
    if (type != this.props.type) {
      this.setState({
        type: this.props.type,
      });
    }
  }

  render() {
    return (
      <Camera
        handleChange={this.handleChange()}
        ratio={"16:9"}
        ref={this.props.cameraRef}
        style={styles.container}
        type={this.state.type}
        useCamera2Api={true}
      >
        <View style={CameraStyle.captureButtonContainer}>
          <CaptureButton onPress={this.props.toggleRecording} />
        </View>
      </Camera>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostCamera;
