import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";

const styles = StyleSheet.create({
  leftInputSurrounding: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 17,
    backgroundColor: palette.black[400],
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  rightInputSurrounding: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: 17,
    backgroundColor: palette.black[400],
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  bottomInputSurrounding: {
    position: "absolute",
    bottom: 0,
    height: 7,
    width: "100%", // Adjust as needed to cover the left side
    backgroundColor: palette.black[400],
  },
});

export { styles };
