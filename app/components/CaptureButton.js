import React, { Component } from "react";
import { StyleSheet, Pressable, View } from "react-native";

import CameraStyle from "../styles/CameraStyle";

class CaptureButton extends Component {
  constructor() {
    super();
    this.state = {
      recording: false,
      captureButtonInnerColor: null,
    };
  }

  componentDidMount(){
    this.setCaptureButtonInnerColor()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.recording != this.state.recording){
      this.setCaptureButtonInnerColor()
    }
  }

  onPress = () => {
    this.props.onPress();

    this.setState({
      recording: !this.state.recording,
    });
  }

  setCaptureButtonInnerColor(){
    const { recording } = this.state

    if(recording){
      this.setState({
        captureButtonInnerColor: CameraStyle.buttonCaptureInnerColorRecording,
      })
    } else{
      this.setState({
        captureButtonInnerColor: CameraStyle.buttonCaptureInnerColor,
      })
    }
  }

  render() {

    const { captureButtonInnerColor } = this.state;

    return (
      <View style={styles.container}>
        <Pressable onPress={this.onPress}>
          <View style={CameraStyle.buttonCaptureOuter}>
            <View style={[CameraStyle.buttonCaptureInner, captureButtonInnerColor]} />
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

export default CaptureButton;
