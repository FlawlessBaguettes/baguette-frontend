import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CameraStyle from "../styles/CameraStyle";

class PostPreview extends Component {
  constructor() {
    super();
  }

  render() {
    let { uri } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} translucent={true} />
        <Video
          source={{ uri: uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={Video.RESIZE_MODE_COVER}
          shouldPlay={true}
          isLooping={true}
          style={styles.container}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostPreview;
