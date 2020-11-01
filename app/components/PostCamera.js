import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import CaptureButton from './CaptureButton'

const PostCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableHighlight
            activeOpacity={0.6}
            style={{
              flex: 0.15,
              alignSelf: 'flex-top',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialCommunityIcons name="camera-switch" style={styles.flip}/>
          </TouchableHighlight>

          <CaptureButton />

        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  flip: {
    fontSize: 32, 
    marginTop: 10,
    marginLeft: 5, 
    color: 'white'
  },
  capture_button: {
    fontSize: 70, 
    paddingBottom: 50,
    color: 'white'
  },
});

export default PostCamera;