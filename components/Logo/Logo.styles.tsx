import { StyleSheet } from "react-native";
import { fonts } from "../../fonts";
import { palette } from "../../theme/palette";

const styles = StyleSheet.create({
  logoContainer: { justifyContent: "center", alignItems: "center" },
  logo: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: palette.text.primary,
    textAlign: "center",
  },
});

export { styles };
