import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { GET_REPLIES_ENDPOINT } from "../api/constants";

const PostCard = ({
  title,
  contentPostedTime,
  userFullName,
  contentUrl,
  numberOfReplies,
  id,
  navigation,
}) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = contentUrl.match(regExp);
  const videoId = match && match[7].length == 11 ? match[7] : false;

  if (!videoId) {
    <SafeAreaView>
      <Text>Error: Can't parse video url</Text>
    </SafeAreaView>;
  }
  const seeRepliesButtonTitle =
    numberOfReplies > 0 ? "See " + numberOfReplies + " Replies" : "0 Replies";

  const isSeeRepliesButtondDisabled = numberOfReplies > 0 ? false : true;

  seeRepliesButtonOnPress = () => {
    if (numberOfReplies) {
      navigation.push("ListPostsScreen", {
        baseUrl: GET_REPLIES_ENDPOINT + "/" + id,
      });
    }
  };

  return (
    <View style={styles.posts}>
      <View style={styles.titleAndContentPostedTimeHeader}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.contentPostedTime}>{contentPostedTime}</Text>
      </View>

      <Text style={styles.userFullName}>{userFullName}</Text>

      <View style={styles.video}>
        <YoutubePlayer
          height={300}
          videoId={videoId}
          initialPlayerParams={{ loop: true, modestbranding: true }}
        />
      </View>

      <View style={styles.buttonsFooter}>
        <Button
          title={seeRepliesButtonTitle}
          style={styles.seeRepliesButton}
          onPress={seeRepliesButtonOnPress}
          disabled={isSeeRepliesButtondDisabled}
        />
        <Button
          title="Reply"
          style={styles.replyButton}
          onPress={() => {
            navigation.navigate("CameraView");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  posts: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 3,
    marginHorizontal: 3,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "white",
    // height: 325,
  },
  titleAndContentPostedTimeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentPostedTime: {
    fontSize: 12,
  },
  userFullName: {
    fontSize: 15,
  },
  video: {
    paddingVertical: 5,
    paddingHorizontal: 1,
    height: 222,
  },
  buttonsFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 1,
    paddingTop: 5,
  },
  replyButton: {},
  seeRepliesButton: {},
});

export default PostCard;
