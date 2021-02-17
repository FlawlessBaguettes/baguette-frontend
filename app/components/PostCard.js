import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

import { Video } from "expo-av";

import CustomButton from "./CustomButton";
import PostPreview from "./PostPreview";

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
  postHeight,
}) => {
  const headerFadeAnim = useRef(new Animated.Value(1)).current;
  const headerFadeOutTimeout = 3000;
  const [uri, setUri] = useState(null);

  const seeRepliesButtonTitle =
    numberOfReplies > 0 ? "See " + numberOfReplies + " Replies" : "0 Replies";

  const isSeeRepliesButtonDisabled = numberOfReplies > 0 ? false : true;

  const VIMEO_ID = '265111898';
  fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
    .then(res => res.json())
    .then(res => setUri(res.request.files.hls.cdns[res.request.files.hls.default_cdn].url));

  useEffect(() => {
    setTimeout(() => { headerFadeOut() }, headerFadeOutTimeout);
  }, [headerFadeAnim])

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

  const onVideoPressIn = () => {
    headerFadeIn();
    setTimeout(() => { headerFadeOut() }, headerFadeOutTimeout);
  };

  const headerFadeIn = () => {
    Animated.timing(headerFadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const headerFadeOut = () => {
    Animated.timing(headerFadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fullPostCard = () => {
    return (
      <Pressable onPress={onVideoPressIn}>
      <View style={[PostStyle.container, { height: postHeight }]}>
          <View style={PostStyle.containerVideo}>
            <PostPreview isMuted={true} uri={uri} />
          </View>

        <Animated.View style={[PostStyle.containerHeader, { opacity: headerFadeAnim }]}>
          <View style={PostStyle.containerTitle}>
            <Text style={PostStyle.textTitle}>{title}</Text>
            <Text style={PostStyle.textPostedTime}>{contentPostedTime}</Text>
          </View>

          <Text style={PostStyle.textUserFullName}>{userFullName}</Text>
        </Animated.View>

        <View style={PostStyle.containerFooter}>
          <CustomButton
            isPrimary={false}
            onPress={onPressReply}
            title={"Reply"}
            theme={"light"}
          />

          <CustomButton
            disabled={isSeeRepliesButtonDisabled}
            isPrimary={false}
            onPress={onPressSeeReplies}
            title={seeRepliesButtonTitle}
            theme={"light"}
          />
        </View>
      </View>
      </Pressable>
    );
  };

  return (
    <View>
      {fullPostCard()}
    </View>
  );
};

export default PostCard;
