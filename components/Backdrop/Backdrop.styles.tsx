import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";

const styles = StyleSheet.create({
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    backgroundColor: palette.black[400],
  },
});

export { styles };
