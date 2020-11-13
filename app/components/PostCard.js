import { View, Button, StyleSheet, Text } from "react-native";
import React from "react";

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
                    baseUrl:
                      "http://127.0.0.1:5000/baguette/api/v1.0/posts/replies/" +
                      id,
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
            navigation.navigate("PostCamera");
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
