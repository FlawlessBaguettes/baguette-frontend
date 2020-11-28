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
        style={styles.container}
        type={this.state.type}
        ref={this.props.cameraRef}
        handleChange={this.handleChange()}
      >
        <View style={styles.captureButtonContainer}>
          <CaptureButton onPress={this.props.toggleRecording} />
        </View>
      </Camera>
    );
  }
}

const styles = StyleSheet.create({
  captureButtonContainer: {
    flex: 1,
    flexDirection: "row",
  },

  container: {
    flex: 1,
  },
});

export default React.forwardRef((props, ref) => (
  <PostCamera cameraRef={ref} {...props} />
));
