import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import axios from "axios";

import { AuthContext } from "./AuthContext";
import FormTextInput from "./FormTextInput";
import CustomButton from "./CustomButton";

import FormStyle from "../styles/FormStyle";

import { validatePostTitle } from "../utils/FormValidation";

import { POST_POSTS_ENDPOINT } from "../api/constants";

function PostSubmit({ route }) {
  const { authState } = useContext(AuthContext);

  const [isPostButtonDisabled, setIsPostButtonDisabled] = useState(true);
  const [title, setTitle] = useState(null);
  const [video, setVideo] = useState(route.params.video);

  useEffect(() => {
    updatePostButton();
  });

  const handleTitle = (text) => {
    setTitle(text);
  };

  const onPress = async () => {
    const uri = video.uri;
    const uriParts = uri.split("/");
    const fileName = uriParts[uriParts.length - 1];
    const fileNameParts = fileName.split(".");
    const fileType = fileNameParts[fileNameParts.length - 1];
    console.log("uri: " + uri);
    console.log("uriParts: " + uriParts);
    console.log("fileName: " + fileName);
    console.log("fileNameParts: " + fileNameParts);
    console.log("fileType: " + fileType);
    console.log(`authorization header: Bearer ${authState.token}`);

    const headers = {
      Authorization: `Bearer ${authState.token}`,
    };

    console.log(`authorization header: ${headers.Authorization}`);

    try {
      const video = { uri: uri, filename: fileName, type: `video/${fileType}` };
      const response = await axios.post(POST_POSTS_ENDPOINT, {
        headers: headers,
        video: video,
        title: title,
      });
      console.log(response.data.msg);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const updatePostButton = () => {
    const isValidForm = validateForm();

    isValidForm
      ? setIsPostButtonDisabled(false)
      : setIsPostButtonDisabled(true);
  };

  const validateForm = () => {
    return validatePostTitle(title) === true;
  };

  return (
    <ScrollView contentContainerStyle={FormStyle.container}>
      <View style={FormStyle.containerForm}>
        <FormTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          clearTextOnFocus={false}
          header={"Title"}
          onChangeText={handleTitle}
          validateInput={validatePostTitle}
        />
      </View>

      <View style={FormStyle.containerButtons}>
        <CustomButton
          disabled={isPostButtonDisabled}
          isPrimary={true}
          onPress={onPress}
          title={"Post"}
        />
      </View>
    </ScrollView>
  );
}

export default PostSubmit;
