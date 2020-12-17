import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
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

  render() {
    return (
      <SafeAreaView style={CameraStyle.safeAreaView}>
        <View style={CameraStyle.container}>
          <TouchableOpacity
            style={CameraStyle.topLeftButton}
            onPress={this.goBack}
          >
            <MaterialCommunityIcons
              name="keyboard-backspace"
              style={CameraStyle.iconButton}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={CameraStyle.topRightButton}
            onPress={this.toggleCameraType}
          >
            <MaterialCommunityIcons
              name="camera-switch"
              style={CameraStyle.iconButton}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default CameraControls;
