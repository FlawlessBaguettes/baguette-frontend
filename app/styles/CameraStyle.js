import { StyleSheet } from "react-native";

const CameraStyle = StyleSheet.create({
  captureButtonContainer: {
    flex: 1,
    flexDirection: "row",
  },

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

  iconButton: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },

  safeAreaView: {
    flexDirection: "row",
    position: "absolute",
  },

  textButton: {
    color: "white",
    fontSize: 24,
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
