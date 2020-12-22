import React from "react";
import { Button, StyleSheet } from "react-native";
import { GET_REPLIES_ENDPOINT } from "../api/constants";
const SeeRepliesButton = ({ numberOfReplies, id, navigation }) => {
  if (numberOfReplies) {
    return (
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
    );
  } else {
    return (
      <Button
        title="0 Replies"
        style={styles.seeRepliesButton}
        disabled={true}
      />
    );
  }
};

const styles = StyleSheet.create({
  seeRepliesButton: {},
});
export default SeeRepliesButton;
