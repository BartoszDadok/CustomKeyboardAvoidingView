import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  keyboardContainer: {
    flex: 1,
  },
  wrapper: { flex: 1, justifyContent: "space-between" },
  contentContainer: {
    justifyContent: "center",
  },
  buttonsContainer: {
    gap: 20,
    flexDirection: "row",
    marginTop: 50,
    height: 100,
  },
  button: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(15, 11, 9, 0.5)",
  },
  buttonText: {
    color: palette.text.secondary,
    textAlign: "center",
    fontFamily: fonts.regular,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 15,
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: fonts.regular,
    marginBottom: 7,
  },
});

export { styles };
