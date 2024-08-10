import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 200,
    paddingHorizontal: 16,
  },
  logoContainer: {
    justifyContent: "center",
    height: 200,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: palette.text.primary,
    textAlign: "center",
    marginTop: 20,
  },
  inputContainer: { gap: 10 },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 15,
    color: palette.text.primary,
    fontFamily: fonts.regular,
  },
  button: {
    marginTop: 7,
    borderRadius: 4,
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: palette.purple[400],
    borderWidth: 1,
    borderColor: palette.purple[600],
  },
  buttonText: {
    textAlign: "center",
    fontFamily: fonts.regular,
    color: palette.text.primary,
  },
});

export { styles };
