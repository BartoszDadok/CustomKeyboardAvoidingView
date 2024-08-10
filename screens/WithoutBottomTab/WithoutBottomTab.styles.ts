import { StyleSheet } from "react-native";
import { fonts } from "../../fonts";
import { palette } from "../../theme/palette";

const PADDING_TOP = 300;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: palette.text.primary,
    textAlign: "center",
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  logoContainer: { flex: 1, justifyContent: "center" },
  inputStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 15,
    color: palette.text.primary,
    fontFamily: fonts.regular,
    marginHorizontal: 16,
  },
  keyboardAvoidingViewAnimatedStyles: {
    paddingTop: PADDING_TOP,
  },
});

export { styles };
