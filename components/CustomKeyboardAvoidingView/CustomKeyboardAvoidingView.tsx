import { PropsWithChildren } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

import { useAppContext } from "../../providers/AppProvider";

const INITIAL_POSITION = 0;
const BOTTOM_TAB_HEIGHT = 65;
type Props = {
  offset?: number;
  customStyles?: ViewStyle;
  inputAtBottomScreen?: boolean;
  containBottomTabNavigator?: boolean;
};
const CustomKeyboardAvoidingView = ({
  children,
  offset = INITIAL_POSITION,
  customStyles,
  inputAtBottomScreen,
  containBottomTabNavigator,
}: PropsWithChildren<Props>) => {
  // We get the keyboardOpen and keyboardHeight from the AppProvider
  const { keyboardOpen, keyboardHeight } = useAppContext();

  const customAnimatedStyles = useAnimatedStyle(() => {
    // Here we calculate the translateY value based on the keyboard state(open and KeyboardHeight), input position and bottom tab navigator
    const getTranslateYCoordinate = () => {
      // When the keyboard is open and the input and bottom tabNavigator is at the bottom of the screen
      if (keyboardOpen && inputAtBottomScreen && containBottomTabNavigator) {
        return -keyboardHeight + BOTTOM_TAB_HEIGHT;
        // Only when the keyboard is open and the input is at the bottom of the screen
      } else if (keyboardOpen && inputAtBottomScreen) {
        return -keyboardHeight;
        // Only when the keyboard is open, no input at the bottom of the screen and bottom tab navigator
      } else if (keyboardOpen) {
        return -offset;
      } else {
        // When keyboard is closed
        return INITIAL_POSITION;
      }
    };
    const translateY = getTranslateYCoordinate();

    return {
      ...customStyles,
      transform: [
        {
          translateY: withTiming(translateY),
        },
      ],
    };
  });

  return <Animated.View style={customAnimatedStyles}>{children}</Animated.View>;
};

export { CustomKeyboardAvoidingView };
