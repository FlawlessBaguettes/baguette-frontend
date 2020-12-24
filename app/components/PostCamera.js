import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

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

  renderEmptyState() {
    return (
      <View style={CameraStyle.containerEmptyState}>
        <Text style={CameraStyle.textHeaderEmptyState}>
          Use Baguette's Camera
        </Text>
        <Text style={CameraStyle.textDescriptionEmptyState}>
          Please ensure camera and audio permissions are on for this app in the
          device settings
        </Text>
      </View>
    );
  }

  renderCamera() {
    return (
      <Camera
        handleChange={this.handleChange()}
        ratio={"16:9"}
        ref={this.props.cameraRef}
        style={styles.container}
        type={this.state.type}
        useCamera2Api={true}
      >
        <View style={CameraStyle.containerCaptureButton}>
          <CaptureButton onPress={this.props.toggleRecording} />
        </View>
      </Camera>
    );
  }

  render() {
    const { cameraDisabled } = this.props;

    return (
      <View style={styles.container}>
        {!cameraDisabled && this.renderCamera()}
        {cameraDisabled && this.renderEmptyState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostCamera;
