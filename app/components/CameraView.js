import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Audio } from "expo-av";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";

import axios from "axios";

import CameraControls from "./CameraControls";
import PostCamera from "./PostCamera";
import PostPreview from "./PostPreview";
import PostPreviewControls from "./PostPreviewControls";

import { POST_POSTS_ENDPOINT } from "../api/constants";

class CameraView extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      cameraDisabled: true,
      hasAudioPermissions: null,
      hasCameraPermissions: null,
      recording: false,
      showCamera: true,
      type: Camera.Constants.Type.front,
      video: null,
    };

    this.cameraRef = React.createRef();
  }

  async componentDidMount() {
    this._isMounted = true;
    this.getCameraPermissions();
    this.getAudioPermissions();
    this.updateCameraDisabled();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.hasAudioPermissions != this.state.hasAudioPermissions ||
      prevState.hasCameraPermissions != this.state.hasCameraPermissions
    ) {
      this.updateCameraDisabled();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  cancelPreview = () => {
    this.setState({
      showCamera: true,
      video: null,
    });
  };

  async getAudioPermissions() {
    let { status } = await Audio.requestPermissionsAsync();
    if (status === "granted") {
      this.setState({
        hasAudioPermissions: status,
      });
    }
  }

  async getCameraPermissions() {
    let { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      this.setState({
        hasCameraPermissions: status,
      });
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  renderCameraControls() {
    const { cameraDisabled, showCamera, recording } = this.state;

    if (showCamera && !recording) {
      return (
        <CameraControls
          cameraDisabled={cameraDisabled}
          goBack={this.goBack}
          toggleCameraType={this.toggleCameraType}
        />
      );
    } else {
      return null;
    }
  }

  renderPostCamera() {
    const { cameraDisabled, showCamera, type } = this.state;

    if (showCamera) {
      return (
        <PostCamera
          cameraDisabled={cameraDisabled}
          cameraRef={this.cameraRef}
          toggleRecording={this.toggleRecording}
          type={type}
        />
      );
    } else {
      return null;
    }
  }

  renderPostPreview() {
    const { showCamera, video } = this.state;
    if (!showCamera && video) {
      return <PostPreview uri={video.uri} />;
    } else {
      return null;
    }
  }

  renderPostPreviewControls() {
    const { showCamera, video } = this.state;
    if (!showCamera && video) {
      return (
        <PostPreviewControls
          cancelPreview={this.cancelPreview}
          submitVideo={this.submitVideo}
        />
      );
    } else {
      return null;
    }
  }

  async startRecording() {
    if (this.cameraRef.current) {
      this.setState({ recording: true }, async () => {
        let video = await this.cameraRef.current.recordAsync();
        if (this._isMounted) {
          await this.setState({
            video,
            showCamera: false,
          });
        }
      });
    }
  }

  async stopRecording() {
    this.setState({ recording: false }, async () => {
      await this.cameraRef.current.stopRecording();
    });
  }

  submitVideo = () => {
    const { video } = this.state;
    const uri = video.uri;
    const uriParts = uri.split("/");
    const fileName = uriParts[uriParts.length - 1];
    const fileNameParts = fileName.split(".");
    const fileType = fileName[fileName.length - 1];

    const bodyFormData = new FormData();
    bodyFormData.append("video", {
      uri: uri,
      name: fileName,
      type: `video/${fileType}`,
    });

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    var config = {
      method: "post",
      url: POST_POSTS_ENDPOINT,
      headers: headers,
      data: bodyFormData,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  toggleCameraType = () => {
    if (this.state.type === Camera.Constants.Type.back) {
      this.setState({
        type: Camera.Constants.Type.front,
      });
    } else {
      this.setState({
        type: Camera.Constants.Type.back,
      });
    }
  };

  toggleRecording = () => {
    const { recording } = this.state;
    if (recording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  };

  updateCameraDisabled() {
    const { hasAudioPermissions, hasCameraPermissions } = this.state;
    var { cameraDisabled } = this.state;

    if (hasCameraPermissions === null || hasAudioPermissions === null) {
      cameraDisabled = true;
    } else {
      cameraDisabled = false;
    }

    this.setState({
      cameraDisabled: cameraDisabled,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} translucent={true} />
        {this.renderPostCamera()}
        {this.renderCameraControls()}
        {this.renderPostPreview()}
        {this.renderPostPreviewControls()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CameraView;
