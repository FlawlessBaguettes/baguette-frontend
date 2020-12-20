import React, { useState, useCallback, useRef } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { GET_REPLIES_ENDPOINT } from "../api/constants";
import YoutubePlayer from "react-native-youtube-iframe";

const PostCard = ({
  title,
  contentPostedTime,
  userFullName,
  contentUrl,
  numberOfReplies,
  id,
  navigation,
}) => {
  const [playing, setPlaying] = useState(false);

  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = contentUrl.match(regExp);
  const videoId = match && match[7].length == 11 ? match[7] : false;

  if (!videoId) {
    <SafeAreaView>
      <Text>Error: Can't parse video url</Text>
    </SafeAreaView>;
  }

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.posts}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.contentPostedTime}>{contentPostedTime}</Text>
      </View>

      <Text style={styles.userFullName}>{userFullName}</Text>

      <View style={styles.video}>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={videoId}
          initialPlayerParams={{ loop: true, modestbranding: true }}
          onChangeState={onStateChange}
        />
      </View>

      <View style={styles.buttonsFooter}>
        <View>
          {numberOfReplies ? (
            <Button
              title={"See " + numberOfReplies + " Replies"}
              style={styles.seeRepliesButton}
              onPress={() => {
                if (numberOfReplies) {
                  navigation.push("ListPostsScreen", {
                    baseUrl: GET_REPLIES_ENDPOINT + "/" + id,
                  });
                }
              }}
            />
          ) : (
            <Button
              title="0 Replies"
              style={styles.seeRepliesButton}
              disabled={true}
            />
          )}
        </View>
        <Button
          title="Reply"
          style={styles.replybutton}
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
    marginVertical: 3,
    marginHorizontal: 3,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "white",
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
  seeRepliesButton: {},
  replyButton: {},
});

export default PostCard;