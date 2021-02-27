import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

import PropTypes from 'prop-types';

import CustomButton from "./CustomButton";
import PostPreview from './PostPreview';

import PostStyle from "../styles/PostStyle";

import useFetch from "../utils/useFetch";

const PostCard = ({
  contentPostedTime,
  id,
  isActive,
  navigation,
  numberOfReplies,
  postHeight,
  title,
  userFullName,
}) => {
  console.log(title, isActive)
  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(null);
  const isVideoLoadedRef = useRef();
  isVideoLoadedRef.current = isVideoLoaded;


  const headerFadeAnim = useRef(new Animated.Value(1)).current;

  const [posterUri, setPosterUri] = useState(null);
  const [videoUri, setVideoUri] = useState(null);

  const VIMEO_ID = '265111898';
  const url = `https://player.vimeo.com/video/${VIMEO_ID}/config`

  const [response] = useFetch(url);

  const seeRepliesButtonTitle =
    numberOfReplies > 0 ? "See " + numberOfReplies + " Replies" : "0 Replies";

  const isSeeRepliesButtonDisabled = numberOfReplies > 0 ? false : true;

  // fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
  //   .then(res => res.json())
  //   .then(res => setVideoUri(res.request.files.hls.cdns[res.request.files.hls.default_cdn].url));

  useEffect(() => {
    let isMounted = true;

    updateUri();

    return () => { isMounted = false };
  }, [])

  useEffect(() => {
    if (videoStatus && videoStatus.isLoaded) {
      setIsVideoLoaded(videoStatus.isLoaded);
    } else {
      setIsVideoLoaded(false);
    }
  }, [videoStatus])

  useEffect(() => {
    if (isVideoLoaded) {
      headerFadeOut();
    } else {
      headerFadePulse()
    }
  }, [isVideoLoaded])

  useEffect(() => {
    updateUri();
  }, [response])

  const headerFadeIn = () => {
    Animated.timing(headerFadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const headerFadeOut = () => {
    Animated.sequence([
      Animated.delay(3000),
      Animated.timing(headerFadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      })
    ]).start()
  };

  const headerFadePulse = () => {
    Animated.sequence([
      Animated.timing(headerFadeAnim, {
        toValue: 0.25,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(headerFadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start(() => {
      if (!isVideoLoadedRef.current) {
        headerFadePulse();
      }
    })
  }

  const onPressReply = () => {
    navigation.navigate("CameraView");
  };

  const onPressSeeReplies = () => {
    if (numberOfReplies) {
      navigation.push("ListPostsScreen", {
        postId: id,
      });
    }
  };

  const onVideoPressIn = () => {
    headerFadeIn();
    headerFadeOut();
  };

  const updateUri = () => {
    if (response) {
      setPosterUri(response.video.thumbs['640'])
      setVideoUri(response.request.files.hls.cdns[response.request.files.hls.default_cdn].url)
    }
  }

  const fullPostCard = () => {
    return (
      <Pressable onPress={onVideoPressIn}>
        <View style={[PostStyle.container, { height: postHeight }]}>
          <View style={PostStyle.containerVideo}>
            <PostPreview isMuted={true} setVideoStatus={setVideoStatus} posterUri={posterUri} videoUri={videoUri} videoRef={videoRef} />
          </View>

          <Animated.View style={[PostStyle.containerHeader, { opacity: headerFadeAnim }]}>
            <View style={PostStyle.containerTitle}>
              <Text style={PostStyle.textTitle}>{title}</Text>
              <Text style={PostStyle.textPostedTime}>{contentPostedTime}</Text>
            </View>

            <Text style={PostStyle.textUserFullName}>{userFullName}</Text>
          </Animated.View>

          <View style={PostStyle.containerFooter}>
            <CustomButton
              isPrimary={false}
              onPress={onPressReply}
              title={"Reply"}
              theme={"light"}
            />

            <CustomButton
              disabled={isSeeRepliesButtonDisabled}
              isPrimary={false}
              onPress={onPressSeeReplies}
              title={seeRepliesButtonTitle}
              theme={"light"}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      {fullPostCard()}
    </View>
  );
};

PostCard.propTypes = {
  contentPostedTime: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
  numberOfReplies: PropTypes.number.isRequired,
  postHeight: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  userFullName: PropTypes.string.isRequired,
}

export default PostCard;
