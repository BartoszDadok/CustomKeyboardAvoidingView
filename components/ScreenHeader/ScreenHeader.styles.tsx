import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";

const styles = StyleSheet.create({
  screenHeaderContainer: {
    backgroundColor: palette.black[200],
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 10,
    gap: 10,
    zIndex: 5,
    paddingHorizontal: 7,
  },
  screenHeaderTitle: {
    fontSize: 16,
    color: palette.text.primary,
    marginBottom: 2,
    fontFamily: fonts.regular,
  },
});

export { styles };
