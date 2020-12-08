import React, { Component } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CameraStyle from "../styles/CameraStyle";

class CameraControls extends Component {
  constructor(props) {
    super(props);
  }

  toggleCameraType = () => {
    this.props.toggleCameraType();
  };

  goBack = () => {
    this.props.goBack();
  };

  renderGoBackButton() {
    return (
      <Pressable style={CameraStyle.topLeftButton} onPress={this.goBack}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          style={CameraStyle.iconButton}
        />
      </Pressable>
    );
  }

  renderToggleCameraTypeButton() {
    return (
      <Pressable
        style={CameraStyle.topRightButton}
        onPress={this.toggleCameraType}
      >
        <MaterialCommunityIcons
          name="camera-switch"
          style={CameraStyle.iconButton}
        />
      </Pressable>
    );
  }

  render() {
    const { cameraDisabled } = this.props;
    return (
      <SafeAreaView style={CameraStyle.safeAreaView}>
        <View style={CameraStyle.container}>
          {this.renderGoBackButton()}
          {!cameraDisabled && this.renderToggleCameraTypeButton()}
        </View>
      </SafeAreaView>
    );
  }
}

export default CameraControls;
