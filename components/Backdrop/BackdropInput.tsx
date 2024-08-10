import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { styles } from "./BackdropInput.styles";
const BackdropInput = () => {
  return (
    <>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.leftInputSurrounding}
      />
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.rightInputSurrounding}
      />
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.bottomInputSurrounding}
      />
    </>
  );
};

export { BackdropInput };
