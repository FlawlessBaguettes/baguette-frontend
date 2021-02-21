import React from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";

function PostPreview({ shouldPlay: propsShouldPlay, isMuted: propsIsMuted, uri }) {
  const isMuted = propsIsMuted ? propsIsMuted : true;
  const shoudPlay = propsShouldPlay ? propsShouldPlay : true;
  
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: uri }}
        rate={1.0}
        volume={1.0}
        isMuted={isMuted}
        resizeMode={Video.RESIZE_MODE_COVER}
        shouldPlay={shoudPlay}
        isLooping={true}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostPreview;
