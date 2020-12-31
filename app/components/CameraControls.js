import React from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CameraStyle from "../styles/CameraStyle";

function CameraControls({ cameraDisabled, goBack, toggleCameraType }) {

  const renderGoBackButton = () => {
    return (
      <Pressable style={CameraStyle.buttonTopLeft} onPress={goBack}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          style={CameraStyle.buttonIcon}
        />
      </Pressable>
    );
  }

  const renderToggleCameraTypeButton = () => {
    return (
      <Pressable
        style={CameraStyle.buttonTopRight}
        onPress={toggleCameraType}
      >
        <MaterialCommunityIcons
          name="camera-switch"
          style={CameraStyle.buttonIcon}
        />
      </Pressable>
    );
  }
    
    return (
      <SafeAreaView style={CameraStyle.safeAreaView}>
        <View style={CameraStyle.container}>
          {renderGoBackButton()}
          {!cameraDisabled && renderToggleCameraTypeButton()}
        </View>
      </SafeAreaView>
    );
}

export default CameraControls;
