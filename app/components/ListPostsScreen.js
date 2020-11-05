import React, { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import {
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";

const ListPostsScreen = ({ route, navigation }) => {
  const baseUrl = route.params.baseUrl;
  const [url, setUrl] = useState(baseUrl);
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
    : [response.post]; // temporary

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.posts}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.contentPostedTime}>
                {item.content.posted_time}
              </Text>
            </View>

            <Text style={styles.userFullName}>{item.user.full_name}</Text>

            <View style={styles.video}>
              <Text>{item.content.url}</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                {item.number_of_replies ? (
                  <Button
                    title={"See " + item.number_of_replies + " Replies"}
                    style={styles.button}
                    onPress={() => {
                      if (item.number_of_replies) {
                        navigation.push(
                          'ListPostsScreen', {
                            baseUrl: "http://127.0.0.1:5000/baguette/api/v1.0/posts/replies/" + item.id,
                          } 
                        )
                      }
                    }}
                  />
                ) : (
                  <Button
                    title="0 Replies"
                    style={styles.button}
                    disabled={true}
                  />
                )}
              </View>
              <Button 
                title="Reply" 
                style={styles.button} 
                onPress={() => {navigation.navigate('CameraView')}}
              />
            </View>
          </View>
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

export default ListPostsScreen;
