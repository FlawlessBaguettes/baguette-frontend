import React from "react";
import { StyleSheet } from "react-native";
import ListPostsScreen from "./ListPostsScreen";

export default App = () => {
  return (
    <ListPostsScreen
      baseUrl={"http://127.0.0.1:5000/baguette/api/v1.0/posts"}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
