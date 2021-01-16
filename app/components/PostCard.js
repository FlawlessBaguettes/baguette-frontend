import React from "react";
import { Text, View } from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";

import CustomButton from "./CustomButton";

import PostStyle from "../styles/PostStyle";

import { GET_REPLIES_ENDPOINT } from "../api/constants";

const PostCard = ({
  contentPostedTime,
  contentUrl,
  id,
  navigation,
  numberOfReplies,
  title,
  userFullName,
}) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = contentUrl.match(regExp);
  const videoId = match && match[7].length == 11 ? match[7] : false;

  const seeRepliesButtonTitle =
    numberOfReplies > 0 ? "See " + numberOfReplies + " Replies" : "0 Replies";

  const isSeeRepliesButtonDisabled = numberOfReplies > 0 ? false : true;

  const onPressReply = () => {
    navigation.navigate("CameraView");
  };

  const onPressSeeReplies = () => {
    if (numberOfReplies) {
      navigation.push("ListPostsScreen", {
        postId: id,
      });
    }
  };

  if (!videoId) {
    console.warn("Invalid URL or video ID")
    return null;
  }

  return (
    <View style={PostStyle.container}>
      <View style={PostStyle.containerHeader}>
        <View style={PostStyle.containerTitle}>
          <Text style={PostStyle.textTitle}>{title}</Text>
          <Text style={PostStyle.textPostedTime}>{contentPostedTime}</Text>
        </View>

        <Text style={PostStyle.textUserFullName}>{userFullName}</Text>
      </View>

      <View style={PostStyle.containerVideo}>
        <YoutubePlayer
          height={300}
          videoId={videoId}
          initialPlayerParams={{ loop: true, modestbranding: true }}
        />
      </View>

      <View style={PostStyle.containerFooter}>
        <CustomButton
          isPrimary={false}
          onPress={onPressSeeReplies}
          title={seeRepliesButtonTitle}
          disabled={isSeeRepliesButtonDisabled}
        />

        <CustomButton
          isPrimary={false}
          onPress={onPressReply}
          title={"Reply"}
        />
      </View>
    </View>
  );
};

export default PostCard;
