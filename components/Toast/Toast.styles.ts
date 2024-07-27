import { StyleSheet } from "react-native";
import { fonts } from "../../fonts";
import { palette } from "../../theme/palette";

const styles = StyleSheet.create({
  success: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderLeftColor: palette.text.secondary,
  },
  error: { padding: 10 },
  text: {
    fontFamily: fonts.regular,
    color: palette.text.secondary,
    fontSize: 14,
  },
});

export { styles };
