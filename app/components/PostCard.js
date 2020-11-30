import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
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
  return (
    <View style={styles.posts}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.contentPostedTime}>{contentPostedTime}</Text>
      </View>

      <Text style={styles.userFullName}>{userFullName}</Text>

      <View style={styles.video}>
        <Text>{contentUrl}</Text>
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
    paddingTop: "20%",
    paddingBottom: "20%",
  },
  button: {},
});

export default PostCard;
