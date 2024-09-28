import { Platform, Keyboard, Animated, ViewStyle } from "react-native";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

type CustomKeyboardAvoidingViewProps = {
  screenWithBottomTabNavigation?: boolean;
  offset?: number;
  positionBottom?: boolean;
  animatedPaddingTopValue?: mumber;
  customStyles?: ViewStyle;
};

const isIOS = Platform.OS === "ios";
const INITIAL_POSITION = 0;
const INITIAL_PADDING_TOP = 0;
const BOTTOM_TAB_HEIGHT = isIOS ? 78 : 50;

const CustomKeyboardAvoidingView = ({
  screenWithBottomTabNavigation = false,
  offset = 0,
  positionBottom = false,
  animatedPaddingTopValue = 0,
  customStyles,
  children,
}: PropsWithChildren<CustomKeyboardAvoidingViewProps>) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const translateY = useRef(new Animated.Value(INITIAL_POSITION)).current;
  const paddingTop = useRef(new Animated.Value(INITIAL_PADDING_TOP)).current;

  const getTranslateYValue = () => {
    // When the keyboard is open and the input and bottom tabNavigator is at the bottom of the screen
    if (keyboardOpen && positionBottom && screenWithBottomTabNavigation) {
      return -keyboardHeight + BOTTOM_TAB_HEIGHT;
      // Only when the keyboard is open and the input is at the bottom of the screen
    } else if (keyboardOpen && positionBottom) {
      return -keyboardHeight + offset;
      // Only when the keyboard is open, no input at the bottom of the screen and bottom tab navigator
    } else if (keyboardOpen) {
      return -offset;
    } else {
      // When keyboard is closed
      return INITIAL_POSITION;
    }
  };

  const animateValues = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: getTranslateYValue(),
        duration: isIOS ? 300 : 200,
        useNativeDriver: false,
      }),
      Animated.timing(paddingTop, {
        toValue: keyboardOpen ? animatedPaddingTopValue : 0,
        duration: isIOS ? 300 : 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      isIOS ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        setKeyboardOpen(true);
        setKeyboardHeight(e.endCoordinates.height);
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      isIOS ? "keyboardWillHide" : "keyboardDidHide",
      (e) => {
        setKeyboardOpen(false);
        setKeyboardHeight(e.endCoordinates.height);
      }
    );
    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  useEffect(() => {
    animateValues();
  }, [keyboardHeight, keyboardOpen]);

  return (
    <Animated.View
      style={[customStyles, { transform: [{ translateY }], paddingTop }]}
    >
      {children}
    </Animated.View>
  );
};

export { CustomKeyboardAvoidingView };
