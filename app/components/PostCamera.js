import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Camera } from "expo-camera";

import CaptureButton from "./CaptureButton";
import CameraStyle from "../styles/CameraStyle";

function PostCamera({ cameraDisabled, cameraRef, toggleRecording, type: propsCameraType }) {
  const [type, setType] = useState(propsCameraType)

  const handleChange = (event) => {
    if (type != propsCameraType) {
      setType(propsCameraType)
    }
  }

  const renderCamera = () => {
    return (
      <Camera
        handleChange={handleChange()}
        ratio={"16:9"}
        ref={cameraRef}
        style={styles.container}
        type={type}
        useCamera2Api={true}
      >
        <View style={CameraStyle.containerCaptureButton}>
          <CaptureButton onPress={toggleRecording} />
        </View>
      </Camera>
    );
  }

  const renderEmptyState = () => {
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

  return (
    <View style={styles.container}>
      {!cameraDisabled && renderCamera()}
      {cameraDisabled && renderEmptyState()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostCamera;
