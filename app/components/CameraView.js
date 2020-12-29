import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Audio } from "expo-av";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";

import CameraControls from "./CameraControls";
import PostCamera from "./PostCamera";
import PostPreview from "./PostPreview";
import PostPreviewControls from "./PostPreviewControls";

function CameraView({ navigation }) {
  const [cameraDisabled, setCameraDisabled] = useState(true);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(null);
  const [hasCameraPermissions, setHasCameraPermissions] = useState(null);
  const [recording, setRecording] = useState(false);
  const [showCamera, setShowCamera] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [video, setVideo] = useState(null);

  let cameraRef = React.createRef();

  useEffect(() => {
    (async () => {
      await requestCameraPermissions();
      await requestAudioPermissions();
      updateCameraDisabled();
    })();
  }, [hasCameraPermissions, hasAudioPermissions]);

  const cancelPreview = () => {
    setShowCamera(true);
    setVideo(null);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const renderCameraControls = () => {
    if (showCamera && !recording) {
      return (
        <CameraControls
          cameraDisabled={cameraDisabled}
          goBack={goBack}
          toggleCameraType={toggleCameraType}
        />
      );
    } else {
      return null;
    }
  };

  const renderPostCamera = () => {
    if (showCamera) {
      return (
        <PostCamera
          cameraDisabled={cameraDisabled}
          cameraRef={cameraRef}
          toggleRecording={toggleRecording}
          type={type}
        />
      );
    } else {
      return null;
    }
  };

  const renderPostPreview = () => {
    if (!showCamera && video) {
      return <PostPreview uri={video.uri} />;
    } else {
      return null;
    }
  };

  const renderPostPreviewControls = () => {
    if (!showCamera && video) {
      return (
        <PostPreviewControls
          cancelPreview={cancelPreview}
          submitVideo={submitVideo}
        />
      );
    } else {
      return null;
    }
  };

  const requestAudioPermissions = async () => {
    let { status } = await Audio.requestPermissionsAsync();

    if (status === "granted") {
      setHasAudioPermissions(status);
    }
  };

  const requestCameraPermissions = async () => {
    let { status } = await Camera.requestPermissionsAsync();

    if (status === "granted") {
      setHasCameraPermissions(status);
    }
  };

  const startRecording = async () => {
    if (cameraRef.current) {
      setRecording(true);
      let video = await cameraRef.current.recordAsync();
      await setVideo(video);
      await setShowCamera(false);
    }
  };

  const stopRecording = async () => {
    await cameraRef.current.stopRecording();
    await setRecording(false);
  };

  const submitVideo = () => {
    if (video) {
      navigation.navigate("PostSubmit", {
        video: video,
      });
    }
  };

  const toggleCameraType = () => {
    if (type === Camera.Constants.Type.back) {
      setType(Camera.Constants.Type.front);
    } else {
      setType(Camera.Constants.Type.back);
    }
  };

  const toggleRecording = () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const updateCameraDisabled = () => {
    hasCameraPermissions != "granted" || hasAudioPermissions != "granted"
      ? setCameraDisabled(true)
      : setCameraDisabled(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={true} />
      {renderPostCamera()}
      {renderCameraControls()}
      {renderPostPreview()}
      {renderPostPreviewControls()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CameraView;
