import React, { Component } from "react";
import { ScrollView, View } from "react-native";

import axios from "axios";

import FormTextInput from "./FormTextInput";
import CustomButton from "./CustomButton";

import FormStyle from "../styles/FormStyle";

import { validatePostTitle } from "../utils/FormValidation";

import { POST_POSTS_ENDPOINT } from "../api/constants";

class PostSubmit extends Component {
  constructor(props) {
    super(props);
    const { video } = this.props.route.params;
    this.state = {
      isPostButtonDisabled: true,
      title: null,
      video: video,
    };
  }

  componentDidUpdate() {
    this.updatePostButton();
  }

  handleTitle = (title) => {
    this.setState({ title: title });
  };

  onPress = () => {
    const { title, video } = this.state;
    const uri = video.uri;
    const uriParts = uri.split("/");
    const fileName = uriParts[uriParts.length - 1];
    const fileNameParts = fileName.split(".");
    const fileType = fileName[fileName.length - 1];

    const bodyFormData = new FormData();
    bodyFormData.append("video", {
      uri: uri,
      name: fileName,
      type: `video/${fileType}`,
    });

    bodyFormData.append("title", title);

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    let config = {
      method: "post",
      url: POST_POSTS_ENDPOINT,
      headers: headers,
      data: bodyFormData,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  updatePostButton() {
    const { isPostButtonDisabled } = this.state;
    const formValidation = this.validateForm();

    if (isPostButtonDisabled === true && formValidation) {
      this.setState({
        isPostButtonDisabled: false,
      });
    } else if (isPostButtonDisabled === false && !formValidation) {
      this.setState({
        isPostButtonDisabled: true,
      });
    }
  }

  validateForm() {
    const { title } = this.state;
    return validatePostTitle(title) === true;
  }

  render() {
    const { isPostButtonDisabled } = this.state;

    return (
      <ScrollView contentContainerStyle={FormStyle.container}>
        <View style={FormStyle.formsContainer}>
          <FormTextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            clearTextOnFocus={false}
            header={"Title"}
            onChangeText={this.handleTitle}
            validateInput={validatePostTitle}
          />
        </View>

        <View style={FormStyle.buttonsContainer}>
          <CustomButton
            disabled={isPostButtonDisabled}
            isPrimary={true}
            onPress={this.onPress}
            title={"Post"}
          />
        </View>
      </ScrollView>
    );
  }
}

export default PostSubmit;
