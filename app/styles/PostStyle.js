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

  containerHeader: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingHorizontal: 10,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },

  containerTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerVideo: {
    height: '100%',
  },

  textPostedTime: {
    color: colorTextLight,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeSmall,
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
