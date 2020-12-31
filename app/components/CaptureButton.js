import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";

import CameraStyle from "../styles/CameraStyle";

function CaptureButton({ onPress }) {
  const [recording, setRecording] = useState(false);
  const [captureButtonInnerColor, setCaptureButtonInnerColor] = useState(null);

  useEffect(() => {
    updateCaptureButtonInnerColor();
  });

  const onButtonPress = () => {
    onPress();

    setRecording(!recording);
  };

  const updateCaptureButtonInnerColor = () => {
    recording
      ? setCaptureButtonInnerColor(CameraStyle.buttonCaptureInnerColorRecording)
      : setCaptureButtonInnerColor(
          CameraStyle.buttonCaptureInnerColor
        );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onButtonPress}>
        <View style={CameraStyle.buttonCaptureOuter}>
          <View
            style={[CameraStyle.buttonCaptureInner, captureButtonInnerColor]}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

export default CaptureButton;
