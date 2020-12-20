import { StyleSheet } from "react-native";

const ButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },

  primaryButton: {
    backgroundColor: "#0079FF",
    borderRadius: 5,
    marginBottom: 10,
    paddingBottom: 5,
    paddingTop: 5,
    width: "50%",
  },

  primaryButtonDisabled: {
    opacity: 0.25,
  },

  primaryButtonEnabled: {
    opacity: 1,
  },

  primaryButtonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
  },

  secondaryButton: {},

  secondaryButtonDisabled: {},

  secondaryButtonEnabled: {},

  secondaryButtonText: {
    fontSize: 16,
  },
});

export default ButtonStyle;
