import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/stack'

import ErrorScreen from "./ErrorScreen";
import PostCard from "./PostCard";

import { GET_POSTS_ENDPOINT, GET_REPLIES_ENDPOINT } from "../api/constants";

import { SCREEN_HEIGHT } from '../utils/responsive'
import useFetch from "../utils/useFetch";

const ListPostsScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const postHeight = SCREEN_HEIGHT - useHeaderHeight() - insets.bottom;

  const url =
    route.params === undefined
      ? GET_POSTS_ENDPOINT
      : GET_REPLIES_ENDPOINT + "/" + route.params.postId;

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [posts, setPosts] = useState(null);

  const [visibilePost, setVisiblePost] = useState(null);

  const [response, isLoading, hasError, refetch] = useFetch(url);

  const onViewRef = useCallback(({ viewableItems }) => {
    setVisiblePost(() => {
    if(viewableItems){
      // console.log(viewableItems)
      // console.log(viewableItems[0].index)
      // console.log(viewableItems.viewableItems[0].index)
      // return viewableItems[0].index;
    }})
  }, [])

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50, waitForInteraction: false, })


  useEffect(() => {
    let isMounted = true;

    updatePosts();

    return () => { isMounted = false };
  }, [response]);

  const getItemLayout = useCallback((data, index) => ({
    length: postHeight,
    offset: postHeight * index,
    index,
  }), [])

  const keyExtractor = useCallback((item) => item.id, [])

  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const renderItem = useCallback(({ item }) =>
    <PostCard
      contentPostedTime={item.content.posted_time}
      contentUrl={item.content.url}
      id={item.id}
      isActive={visibilePost}
      navigation={navigation}
      numberOfReplies={item.number_of_replies}
      postHeight={postHeight}
      title={item.title}
      userFullName={item.user.full_name}
    />
    , []);

  const updatePosts = () => {
    if (response) {
      const p = response.posts
        ? response.posts.posts
        : response.replies
          ? response.replies.posts
          : null;

      setPosts(p);
    }
  };

  if (hasError) {
    return <ErrorScreen onRefresh={onRefresh} />;
  }

  if (isLoading || !response) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        decelerationRate={'fast'}
        getItemLayout={getItemLayout}
        initialNumToRender={5} // items to render in initial batch
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={3} // number of additional items rendered on every scroll
        onRefresh={onRefresh}
        onViewableItemsChanged={onViewRef}
        refreshing={isRefreshing}
        removeClippedSubviews={true} // when set to true it will unmount components off the viewport
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        snapToInterval={postHeight}
        updateCellsBatchingPeriod={50} // delay in ms between batch renders, left as default
        viewabilityConfig={viewConfigRef.current}
        windowSize={5} // unit here is 1 viewport height
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
