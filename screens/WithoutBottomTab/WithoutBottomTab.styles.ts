import { StyleSheet } from "react-native";
import { fonts } from "../../fonts";
import { palette } from "../../theme/palette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
  },
  logoContainer: { flex: 1, justifyContent: "center" },
  inputStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 15,
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: fonts.regular,
    marginBottom: 7,
  },
});

export { styles };
