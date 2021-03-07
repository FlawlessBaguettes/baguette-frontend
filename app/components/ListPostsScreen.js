import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';

import PropTypes from 'prop-types';

import ErrorScreen from './ErrorScreen';
import PostCard from './PostCard';

import { GET_POSTS_ENDPOINT, GET_REPLIES_ENDPOINT } from '../api/constants';

import { SCREEN_HEIGHT } from '../utils/responsive';
import useFetch from '../utils/useFetch';

const ListPostsScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const postHeight = SCREEN_HEIGHT - useHeaderHeight() - insets.bottom;

  const url =
    route.params === undefined
      ? GET_POSTS_ENDPOINT
      : GET_REPLIES_ENDPOINT + '/' + route.params.postId;
  const [response, isLoading, hasError, refetch] = useFetch(url);
  const [posts, setPosts] = useState(null);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const isScreenFocused = useIsFocused();

  const visibilePost = useRef(null);
  const [visiblePostIndex, setVisiblePostIndex] = useState(null);

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
    waitForInteraction: false,
  });

  const onViewRef = useCallback(({ viewableItems }) => {
    if (viewableItems && viewableItems[0]) {
      visibilePost.current = viewableItems[0];
      setVisiblePostIndex(viewableItems[0].index);
    }
  }, []);

  useEffect(() => {
    updatePosts();
  }, [response]);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: postHeight,
      offset: postHeight * index,
      index,
    }),
    [postHeight]
  );

  const keyExtractor = useCallback((item) => item.id, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const renderItem = useCallback(
    ({ item, index }) => (
      <PostCard
        contentPostedTime={item.content.posted_time}
        contentUrl={item.content.url}
        id={item.id}
        index={index}
        isVisible={visiblePostIndex === index && isScreenFocused}
        navigation={navigation}
        numberOfReplies={item.number_of_replies}
        postHeight={postHeight}
        title={item.title}
        userFullName={item.user.full_name}
        vimeo_id={item.content.external_id}
      />
    ),
    [isScreenFocused, postHeight, visiblePostIndex]
  );

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
        initialNumToRender={5}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={3}
        onRefresh={onRefresh}
        onViewableItemsChanged={onViewRef}
        refreshing={isRefreshing}
        removeClippedSubviews={true}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        snapToInterval={postHeight}
        updateCellsBatchingPeriod={50}
        viewabilityConfig={viewConfigRef.current}
        windowSize={5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

ListPostsScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ListPostsScreen;
