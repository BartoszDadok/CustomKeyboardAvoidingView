import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: { flex: 1 },
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

  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 15,
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: fonts.regular,
  },
});

export { styles };
