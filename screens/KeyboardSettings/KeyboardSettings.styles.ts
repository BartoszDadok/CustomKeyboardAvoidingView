import { Dimensions, StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "center",
  },
  buttonComponent: {
    width: "48%",
    alignItems: "center",
    backgroundColor: "rgba(15, 11, 9, 0.5)",
    justifyContent: "center",
    borderRadius: 4,
    padding: 20,
  },
  buttonComponentNestedMenu: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonKeyboardBehavior: {
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(15, 11, 9, 0.5)",
    borderRadius: 4,
    padding: 20,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: fonts.regular,
    fontSize: 14,
  },

  nestedButtonText: {
    color: palette.text.secondary,
    textAlign: "center",
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  submitButton: {
    alignSelf: "center",
    width: "80%",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(15, 11, 9, 0.5)",
    borderColor: palette.text.disabled,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  submitButtonText: {
    color: palette.text.secondary,
    textAlign: "center",
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  optionsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  headline: { color: palette.text.primary, fontFamily: fonts.regular },
  headlineWrapper: { marginTop: 20 },
  elementsWrapper: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: 15,
    flexWrap: "wrap",
  },
  nestedMenuBar: {
    backgroundColor: "rgba(15, 11, 9, 0.5)",
    height: 8,
    width: (Dimensions.get("window").width - 32) * 0.48,
    alignSelf: "flex-end",
    borderRadius: 0,
    borderBottomWidth: 0,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
  },
  nestedMenu: {
    flexDirection: "row",
    gap: 10,
    borderTopWidth: 0,
    justifyContent: "center",
    backgroundColor: "rgba(15, 11, 9, 0.5)",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    width: "100%",
    height: 100,
  },
  nestedButtonsWrapper: { flexDirection: "row", gap: 10, marginTop: 10 },
  nestedContentWrapper: { padding: 10 },
  nestedButton: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderColor: palette.text.disabled,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export { styles };
