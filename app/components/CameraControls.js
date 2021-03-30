import React from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PropTypes from 'prop-types';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import CameraStyle from '../styles/CameraStyle';

function CameraControls({
  isCameraDisabled,
  canGoBack,
  goBack,
  toggleCameraType,
}) {
  const renderGoBackButton = () => {
    if (canGoBack) {
      return (
        <Pressable style={CameraStyle.buttonTopLeft} onPress={goBack}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            style={CameraStyle.buttonIcon}
          />
        </Pressable>
      );
    }
  };

  const renderToggleCameraTypeButton = () => {
    return (
      <Pressable style={CameraStyle.buttonTopRight} onPress={toggleCameraType}>
        <MaterialCommunityIcons
          name="camera-switch"
          style={CameraStyle.buttonIcon}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={CameraStyle.safeAreaView}>
      <View style={CameraStyle.container}>
        {renderGoBackButton()}
        {!isCameraDisabled && renderToggleCameraTypeButton()}
      </View>
    </SafeAreaView>
  );
}

CameraControls.propTypes = {
  isCameraDisabled: PropTypes.bool,
  canGoBack: PropTypes.bool,
  goBack: PropTypes.func,
  toggleCameraType: PropTypes.func,
};

export default CameraControls;
