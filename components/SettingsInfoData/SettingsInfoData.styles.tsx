import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";

const styles = StyleSheet.create({
  infoText: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: palette.text.primary,
  },
});

export { styles };
