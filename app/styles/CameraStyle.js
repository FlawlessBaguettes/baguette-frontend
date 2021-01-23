import { StyleSheet } from "react-native";

import {
  colorBackgroundDisabled,
  colorButtonCamera,
  colorButtonCameraRecording,
  colorTextDark,
  colorTextGrey,
  colorTextLight,
  fontFamilyRegular,
  fontSizeMedium,
  marginBottomDescription,
  marginBottomHeader,
  textAlignDescription,
  textAlignHeader,
  textFontFamilyDescription,
  textFontFamilyHeader,
  textFontSizeDescription,
  textFontSizeHeader,
} from "./constants.js";

const CameraStyle = StyleSheet.create({
  buttonCaptureInner: {
    height: 55,
    width: 55,
  },

  buttonCaptureInnerColor: {
    borderRadius: 50, // need this for android
    backgroundColor: colorButtonCamera,
  },

  buttonCaptureInnerColorRecording: {
    borderRadius: 50, // need this for android
    backgroundColor: colorButtonCameraRecording,
  },

  buttonCaptureOuter: {
    alignItems: "center",
    borderColor: colorButtonCamera,
    borderRadius: 50,
    borderWidth: 5,
    height: 70,
    justifyContent: "center",
    marginBottom: 20,
    width: 70,
  },

  buttonIcon: {
    color: colorButtonCamera,
    fontSize: 32,
    textAlign: "center",
  },

  buttonPill: {
    backgroundColor: colorButtonCamera,
    borderRadius: 20,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingTop: 8,
    width: 110,
  },

  buttonPillContentsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonPillIconChevron: {
    color: colorTextDark,
    fontSize: 24,
  },

  buttonPillText: {
    alignSelf: "center",
    color: colorTextDark,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
  },

  buttonTopLeft: {
    marginTop: Platform.OS === "android" ? 10 : 0,
    marginLeft: 15,
  },

  buttonTopRight: {
    marginTop: Platform.OS === "android" ? 10 : 0,
    marginRight: 15,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerEmptyState: {
    alignItems: "center",
    backgroundColor: colorBackgroundDisabled,
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },

  containerCaptureButton: {
    flex: 1,
    flexDirection: "row",
  },

  safeAreaView: {
    flexDirection: "row",
    position: "absolute",
  },

  textDescriptionEmptyState: {
    color: colorTextGrey,
    fontFamily: textFontFamilyDescription,
    fontSize: textFontSizeDescription,
    marginBottom: marginBottomDescription,
    textAlign: textAlignDescription,
  },

  textHeaderEmptyState: {
    color: colorTextLight,
    fontFamily: textFontFamilyHeader,
    fontSize: textFontSizeHeader,
    marginBottom: marginBottomHeader,
    textAlign: textAlignHeader,
  },
});

export default CameraStyle;
