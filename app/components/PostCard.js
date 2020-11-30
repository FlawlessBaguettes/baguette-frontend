import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { GET_REPLIES_ENDPOINT } from "../api/constants";
import { WebView } from "react-native-webview";

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

  return (
    <View style={styles.posts}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.contentPostedTime}>{contentPostedTime}</Text>
      </View>

      <Text style={styles.userFullName}>{userFullName}</Text>

      <View style={styles.video}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          source={{
            uri: "https://www.youtube.com/embed/" + videoId,
          }}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          {numberOfReplies ? (
            <Button
              title={"See " + numberOfReplies + " Replies"}
              style={styles.button}
              onPress={() => {
                if (numberOfReplies) {
                  navigation.push("ListPostsScreen", {
                    baseUrl: GET_REPLIES_ENDPOINT + "/" + id,
                  });
                }
              }}
            />
          ) : (
            <Button title="0 Replies" style={styles.button} disabled={true} />
          )}
        </View>
        <Button
          title="Reply"
          style={styles.button}
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
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "white",
  },
  title: {
    fontSize: 15,
  },
  contentPostedTime: {
    fontSize: 12,
  },
  userFullName: {
    fontSize: 15,
  },
  video: {
    height: 250,
    width: "100%",
    paddingTop: 5,
    paddingBottom: 10,
  },
  button: {},
});

export default PostCard;
