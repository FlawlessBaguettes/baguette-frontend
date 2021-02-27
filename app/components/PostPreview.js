import React from "react";
import { StyleSheet, View } from "react-native";

import { Video } from "expo-av";

import PropTypes from 'prop-types';


function PostPreview({ isMuted: propsIsMuted, posterUri, setVideoStatus, shouldPlay: propsShouldPlay, videoUri, videoRef }) {
  const isMuted = propsIsMuted ? propsIsMuted : true;
  const shoudPlay = propsShouldPlay ? propsShouldPlay : true;

  const onPlaybackStatusUpdate = (status) => {
    if(setVideoStatus){
      setVideoStatus(status)
    }
  }

  return (
    <View style={styles.container}>
      <Video
        isLooping={true}
        isMuted={isMuted}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        posterSource={{uri: posterUri}}
        usePoster={true}
        posterStyle={{resizeMode: "cover"}}
        rate={1.0}
        ref={videoRef}
        resizeMode={Video.RESIZE_MODE_COVER}
        shouldPlay={shoudPlay}
        source={{ uri: videoUri }}
        style={styles.container}
        volume={1.0}
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
  isMuted: PropTypes.bool,
  posterUri: PropTypes.string,
  setVideoStatus: PropTypes.func,
  shouldPlay: PropTypes.bool,
  videoUri: PropTypes.string,
  videoRef: PropTypes.object,
}

export default PostPreview;
