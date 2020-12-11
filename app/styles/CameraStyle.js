import { StyleSheet } from "react-native";

import {
  colorBackgroundDisabled,
  colorButtonCamera,
  colorTextGrey,
  colorTextWhite,
  fontFamilyMedium,
  fontFamilyRegular,
  fontSizeExtraLarge,
  fontSizeLarge,
} from "./constants.js";

const CameraStyle = StyleSheet.create({
  captureButtonOuter: {
    alignItems: "center",
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 5,
    justifyContent: "center",
    height: 70,
    marginBottom: 20,
    width: 70,
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

  iconButton: {
    color: colorButtonCamera,
    fontSize: 32,
    textAlign: "center",
  },

  safeAreaView: {
    flexDirection: "row",
    position: "absolute",
  },

  textButton: {
    color: colorButtonCamera,
    fontSize: 24,
    textAlign: "center",
  },

  textDescriptionEmptyState: {
    color: colorTextGrey,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeLarge,
    textAlign: "center",
  },

  textHeaderEmptyState: {
    color: colorTextWhite,
    fontFamily: fontFamilyMedium,
    fontSize: fontSizeExtraLarge,
    marginBottom: 15,
    textAlign: "center",
  },

  topLeftButton: {
    paddingLeft: 15,
  },

  topRightButton: {
    paddingRight: 15,
  },
});

export default CameraStyle;
