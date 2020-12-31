import { StyleSheet } from "react-native";

import {
  colorBackground,
  colorTextGreyDark,
  fontFamilyMedium,
  fontFamilyRegular,
  fontSizeExtraLarge,
  fontSizeMedium,
  fontSizeSmall,
} from "./constants.js";

const PostStyle = StyleSheet.create({

  container: {
    backgroundColor: colorBackground,
    borderBottomWidth: 1,
    borderColor: colorBackground,
    borderRadius: 10,
    marginHorizontal: 3,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  containerHeader: {
    flex: 1,
    marginBottom: 5,
    marginTop: 5,
  },

  containerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerVideo: {
    height: 220,
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

  textUserFullName: {
    color: colorTextGreyDark,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
  },

});

export default PostStyle;