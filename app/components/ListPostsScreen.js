import React from "react";
import useFetch from "../utils/useFetch";
import PostCard from "./PostCard";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

const ListPostsScreen = ({ route, navigation }) => {
  const url = route.params.baseUrl;
  const [response, loading, hasError] = useFetch(url);

  if (hasError) {
    return (
      <SafeAreaView>
        <Text>Error occurred</Text>
      </SafeAreaView>
    );
  }
  if (loading || !response) {
    return <ActivityIndicator />;
  }

  const posts = response.posts
    ? response.posts.posts
    : response.replies
    ? response.replies.replies
    : [];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostCard
            title={item.title}
            contentPostedTime={item.content.posted_time}
            userFullName={item.user.full_name}
            contentUrl={item.content.url}
            numberOfReplies={item.number_of_replies}
            id={item.id}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
});

export default ListPostsScreen;
