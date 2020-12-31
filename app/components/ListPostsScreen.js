import React from "react";
import PostCard from "./PostCard";
import useFetch from "../utils/useFetch";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
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

  const renderItem = ({ item }) => (
    <PostCard
      title={item.title}
      contentPostedTime={item.content.posted_time}
      userFullName={item.user.full_name}
      contentUrl={item.content.url}
      numberOfReplies={item.number_of_replies}
      id={item.id}
      navigation={navigation}
    />
  );

  // const ITEM_HEIGHT = 325;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // getItemLayout={(data, index) => ({
        //   length: ITEM_HEIGHT,
        //   offset: ITEM_HEIGHT * index,
        //   index,
        // })}
        windowSize={11} // unit here is 1 viewport height
        initialNumToRender={3} // items to render in initial batch
        maxToRenderPerBatch={3} // number of additional items rendered on every scroll
        updateCellsBatchingPeriod={50} // delay in ms between batch renders, left as default
        removeClippedSubviews={true} // when set to true it will unmount components off the viewport
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default ListPostsScreen;
