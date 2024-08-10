import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { fonts } from "../../fonts";

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: palette.black[200],
    borderTopColor: "transparent",
  },
  label: {
    fontSize: 11,
    fontFamily: fonts.regular,
  },
});

export { styles };
