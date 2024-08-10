import { StyleSheet } from "react-native";
import { fonts } from "../../fonts";
import { palette } from "../../theme/palette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  title: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: palette.text.primary,
    marginTop: 20,
    marginBottom: 5,
  },

  contentContainer: {
    paddingHorizontal: 16,
  },

  inputStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 15,
    color: palette.text.primary,
    fontFamily: fonts.regular,
    marginBottom: 7,
    minHeight: 120,
    textAlignVertical: "top",
  },
  button: {
    alignSelf: "flex-end",
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.purple[100],
    marginRight: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: palette.text.secondary,
    textAlign: "center",
    fontFamily: fonts.regular,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});

export { styles };
