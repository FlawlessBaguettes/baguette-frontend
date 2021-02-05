import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";

import CustomButton from "./CustomButton";

import PostStyle from "../styles/PostStyle";

import { GET_REPLIES_ENDPOINT } from "../api/constants";

const PostCard = ({
  contentPostedTime,
  contentUrl,
  id,
  isCompactCard,
  navigation,
  numberOfReplies,
  title,
  userFullName,
}) => {
  const [isCompact, setIsCompact] = useState(isCompactCard);
  const [cardSizeButtonText, setCardSizeButtonText] = useState(null);

  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = contentUrl.match(regExp);
  const videoId = match && match[7].length == 11 ? match[7] : false;

  const seeRepliesButtonTitle =
    numberOfReplies > 0 ? "See " + numberOfReplies + " Replies" : "0 Replies";

  const isSeeRepliesButtonDisabled = numberOfReplies > 0 ? false : true;

  useEffect(() => {
    updateCardSizeButtonText();
  });

  const onPressToggleCardSize = () => {
    setIsCompact(!isCompact);
  };

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

  const updateCardSizeButtonText = () => {
    isCompact
      ? setCardSizeButtonText("Expand")
      : setCardSizeButtonText("Collapse");
  };

  const compactPostCard = () => {
    return (
      <Pressable onPress={onPressToggleCardSize}>
        <View style={PostStyle.container}>
          <View style={PostStyle.containerCompactCard}>
            <View style={PostStyle.containerCompactCardText}>
              <Text style={PostStyle.textTitleCompactCard} numberOfLines={3}>
                {title}
              </Text>
              <View>
                <Text style={PostStyle.textPostedTime}>
                  {userFullName} • {contentPostedTime}
                </Text>
              </View>
            </View>
            <View style={PostStyle.containerCompactCardVideo}>
              <YoutubePlayer
                height={150}
                width={150}
                videoId={videoId}
                initialPlayerParams={{ loop: true, modestbranding: true }}
              />
            </View>
          </View>

          <View style={PostStyle.containerFooter}>
            <CustomButton
              isPrimary={false}
              onPress={onPressToggleCardSize}
              title={cardSizeButtonText}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  const fullPostCard = () => {
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
            height={220}
            videoId={videoId}
            initialPlayerParams={{ loop: true, modestbranding: true }}
          />
        </View>

        <View style={PostStyle.containerFooter}>
          {!isCompactCard && (
            <CustomButton
              isPrimary={false}
              onPress={onPressSeeReplies}
              title={seeRepliesButtonTitle}
              disabled={isSeeRepliesButtonDisabled}
            />
          )}
          {!isCompactCard && (
            <CustomButton
              isPrimary={false}
              onPress={onPressReply}
              title={"Reply"}
            />
          )}

          {isCompactCard && (
            <CustomButton
              isPrimary={false}
              onPress={onPressToggleCardSize}
              title={cardSizeButtonText}
            />
          )}
        </View>
      </View>
    );
  };

  if (!videoId) {
    console.warn("Invalid URL or video ID");
    return null;
  }

  return (
    <View>
      {isCompact && compactPostCard()}
      {!isCompact && fullPostCard()}
    </View>
  );
};

export default PostCard;
