import React from "react";
import { StyleSheet, View } from "react-native";

import { Video } from "expo-av";

import PropTypes from 'prop-types';


function PostPreview({ setVideoStatus, shouldPlay: propsShouldPlay, isMuted: propsIsMuted, uri, videoRef }) {
  const isMuted = propsIsMuted ? propsIsMuted : true;
  const shoudPlay = propsShouldPlay ? propsShouldPlay : true;

  const onPlaybackStatusUpdate = (status) => {    
    setVideoStatus(status)
  }

  return (
    <View style={styles.container}>
      <Video
        isLooping={true}
        isMuted={isMuted}
        rate={1.0}
        ref={videoRef}
        resizeMode={Video.RESIZE_MODE_COVER}
        shouldPlay={shoudPlay}
        source={{ uri: uri }}
        style={styles.container}
        volume={1.0}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

PostPreview.propTypes = {
  setVideoStatus: PropTypes.func,
  shouldPlay: PropTypes.bool,
  isMuted: PropTypes.bool,
  uri: PropTypes.string,
  videoRef: PropTypes.object,
}

export default PostPreview;
