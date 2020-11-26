import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import CameraStyle from '../styles/CameraStyle'

class PostPreviewControls extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <SafeAreaView style={CameraStyle.safeAreaView}>
        <View style={CameraStyle.container}>
          <TouchableOpacity
            style={CameraStyle.topLeftButton}
            onPress={this.props.cancelPreview}
          >
            <MaterialCommunityIcons name='close' style={CameraStyle.iconButton} />
          </TouchableOpacity>

          <TouchableOpacity
            style={CameraStyle.topRightButton}
            onPress={this.props.submitVideo}
          >
            <Text style={CameraStyle.textButton}>Post</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

export default PostPreviewControls