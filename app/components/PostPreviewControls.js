import React, { Component } from "react";
import { Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons  } from "@expo/vector-icons";

import CameraStyle from "../styles/CameraStyle";

class PostPreviewControls extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={CameraStyle.safeAreaView}>
        <View style={CameraStyle.container}>
          <Pressable
            style={CameraStyle.topLeftButton}
            onPress={this.props.cancelPreview}
          >
            <MaterialCommunityIcons
              name="close"
              style={CameraStyle.iconButton}
            />
          </Pressable>

          <Pressable
            style={CameraStyle.topRightButton}
            onPress={this.props.submitVideo}
          >
            <Text style={CameraStyle.textButton}>Post</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

export default PostPreviewControls;
