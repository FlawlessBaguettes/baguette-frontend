import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";

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
            style={CameraStyle.buttonTopLeft}
            onPress={this.props.cancelPreview}
          >
            <MaterialCommunityIcons
              name="close"
              style={CameraStyle.buttonIcon}
            />
          </Pressable>

          <Pressable
            style={[CameraStyle.buttonPill, CameraStyle.buttonTopRight]}
            onPress={this.props.submitVideo}
          >
            <View style={CameraStyle.buttonPillContentsContainer}>
              <Text style={CameraStyle.buttonPillText}>Continue</Text>

              <MaterialCommunityIcons
                name="chevron-right"
                style={CameraStyle.buttonPillIconChevron}
              />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

export default PostPreviewControls;
