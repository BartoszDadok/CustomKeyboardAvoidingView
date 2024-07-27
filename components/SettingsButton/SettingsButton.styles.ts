import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(15, 11, 9, 0.5)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 170,
    alignSelf: "flex-end",
    marginTop: 10,
  },
  buttonText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: palette.text.primary,
    marginBottom: 2,
    textAlign: "center",
  },
});

export { styles };
