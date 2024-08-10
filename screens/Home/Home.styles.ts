import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";
import { isBigHeightScreen } from "../../utils/utils";

const PADDING_TOP = isBigHeightScreen ? 300 : 60;

const styles = StyleSheet.create({
  screenContainer: { flex: 1 },
  keyboardContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    height: 100,
    flexGrow: 0,
    marginTop: 30,
    paddingHorizontal: 10,
  },
  button: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.purple[400],
    marginRight: 20,
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
  statusBar: {
    zIndex: 10,
  },
});

export { styles };
