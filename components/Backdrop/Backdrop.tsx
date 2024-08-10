import { ViewStyle } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { styles } from "./Backdrop.styles";

const Backdrop = ({ customStyles }: { customStyles?: ViewStyle }) => {
  return (
    <>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={[styles.backDrop, customStyles]}
      />
    </>
  );
};

export { Backdrop };
