import { StyleSheet } from "react-native";

import {
  colorBackground,
  colorTextGreyDark,
  fontFamilyMedium,
  fontFamilyRegular,
  fontSizeExtraLarge,
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
} from "./constants.js";

const PostStyle = StyleSheet.create({
  container: {
    backgroundColor: colorBackground,
    borderBottomWidth: 1,
    borderColor: colorBackground,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  containerCompactCard: {
    alignItems: "center",
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
  },

  containerCompactCardText: {
    width: 200,
  },

  containerCompactCardVideo: {
    height: 80,
  },

  containerHeader: {
    flex: 1,
    marginBottom: 5,
    marginTop: 5,
  },

  containerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginRight: 5,
  },

  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerVideo: {
    height: 200,
    marginBottom: 10,
  },

  textPostedTime: {
    color: colorTextGreyDark,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeSmall,
  },

  textTitle: {
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
  },

  textTitleCompactCard: {
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeLarge,
  },

  textUserFullName: {
    color: colorTextGreyDark,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
  },
});

export default PostStyle;
