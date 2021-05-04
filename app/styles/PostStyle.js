import { StyleSheet } from 'react-native';

import {
  colorTextLight,
  fontFamilyMedium,
  fontSizeExtraLarge,
  fontSizeMedium,
  fontSizeSmall,
} from './constants.js';

const PostStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerPostDetails: {
    flex: 1,
    paddingVertical: 10,
  },

  containerFooter: {
    flexDirection: 'column',
    paddingBottom: 15,
    paddingHorizontal: 10,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },

  containerFooterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerName: {
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  containerVideo: {
    height: '100%',
  },

  textPostedTime: {
    color: colorTextLight,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
  },

  textTitle: {
    color: colorTextLight,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
  },

  textUserFullName: {
    color: colorTextLight,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeMedium,
  },
});

export default PostStyle;
