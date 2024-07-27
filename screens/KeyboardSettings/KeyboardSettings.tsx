import { Text, Pressable, View, TouchableOpacity } from "react-native";
import { LinearGradientView } from "../../components/LinearGradientView/LinearGradientView";
import { ScreenHeader } from "../../components/ScreenHeader/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./KeyboardSettings.styles";
import { useAppContext } from "../../providers/AppProvider";
import { Reducer, useEffect, useReducer, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { palette } from "../../theme/palette";
import { KeyboardBehaviors, KeyboardLayoutModes } from "../../types/keyboard";
import Toast from "react-native-toast-message";

type KeyboardType = {
  component: "CustomKeyboardAvoidingView" | "KeyboardAvoidingView";
  layoutMode: KeyboardLayoutModes;
  behavior: KeyboardBehaviors;
};

const DEFAULT_LAYOUT_MODE = "ADJUST_NOTHING";
const DEFAULT_BEHAVIOR = undefined;

const appProviderReducer: Reducer<KeyboardType, Partial<KeyboardType>> = (
  prev,
  current
) => {
  // Does not allow update the layoutMode and behavior properties if the component is CustomKeyboardAvoidingView.
  // CustomKeyboardAvoidingView can only work with layoutMode: "AdjustNothing" and behavior: "undefined"
  if (current && current.component === "CustomKeyboardAvoidingView") {
    return {
      ...prev,
      component: current.component || prev.component,
      layoutMode: DEFAULT_LAYOUT_MODE, // always AdjustNothing
      behavior: DEFAULT_BEHAVIOR, // always undefined
    };
  }

  return { ...prev, ...current };
};

const KeyboardSettings = () => {
  const { setAppProvider, keyboardSettings: initialKeyboardSettings } =
    useAppContext();

  const [{ component, layoutMode, behavior }, setKeyboardSettings] = useReducer(
    appProviderReducer,
    initialKeyboardSettings
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(
    component === "KeyboardAvoidingView"
  );
  const { goBack } = useNavigation();

  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleKeyboardAvoidingView = () => {
    if (component !== "KeyboardAvoidingView") {
      handleDropdown();
    }
    setKeyboardSettings({
      layoutMode,
      behavior,
      component: "KeyboardAvoidingView",
    });
  };

  const handleCustomKeyboardAvoidingView = () => {
    setIsDropdownOpen(false);
    setKeyboardSettings({
      layoutMode: "ADJUST_NOTHING",
      behavior: undefined,
      component: "CustomKeyboardAvoidingView",
    });
  };

  const handleBehavior = (behavior: KeyboardBehaviors) => {
    setKeyboardSettings({ layoutMode, behavior, component });
  };

  const handleLayoutMode = (layoutMode: KeyboardLayoutModes) => {
    setKeyboardSettings({ layoutMode, behavior, component });
  };

  const handleSubmitSettings = () => {
    setAppProvider({ keyboardSettings: { component, layoutMode, behavior } });
    goBack();
    Toast.show({
      type: "success",
      text1: "Keyboard settings updated",
      topOffset: 120,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    height.value = withTiming(isDropdownOpen ? 100 : 0, { duration: 300 }); // Adjust 100 to your desired open height
    opacity.value = withTiming(isDropdownOpen ? 1 : 0, { duration: 300 }); // Adjust 100 to your desired open height
  }, [isDropdownOpen, height]);

  return (
    <LinearGradientView>
      <ScreenHeader onBackButton={goBack} title={"Settings"} />
      <View style={styles.contentContainer}>
        <View>
          <View>
            <View>
              <Text style={styles.headline}>Component</Text>
            </View>
            <View style={styles.optionsWrapper}>
              <Pressable
                onPress={handleCustomKeyboardAvoidingView}
                style={[
                  styles.buttonComponent,
                  {
                    backgroundColor:
                      component === "CustomKeyboardAvoidingView"
                        ? "rgba(15, 11, 9, 0.9)"
                        : "rgba(15, 11, 9, 0.5)",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color:
                        component === "CustomKeyboardAvoidingView"
                          ? palette.text.secondary
                          : palette.text.disabled,
                    },
                  ]}
                >
                  CustomKeyboardAvoidingView
                </Text>
              </Pressable>
              <Pressable
                onPress={handleKeyboardAvoidingView}
                style={[
                  styles.buttonComponent,
                  styles.buttonComponentNestedMenu,
                  {
                    backgroundColor:
                      component === "KeyboardAvoidingView"
                        ? "rgba(15, 11, 9, 0.9)"
                        : "rgba(15, 11, 9, 0.5)",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color:
                        component === "KeyboardAvoidingView"
                          ? palette.text.secondary
                          : palette.text.disabled,
                    },
                  ]}
                >
                  KeyboardAvoidingView (provided by React Native)
                </Text>
              </Pressable>
            </View>

            <Animated.View style={animatedStyle}>
              <View
                style={[
                  styles.nestedMenuBar,
                  {
                    backgroundColor:
                      component === "KeyboardAvoidingView"
                        ? "rgba(15, 11, 9, 0.9)"
                        : "rgba(15, 11, 9, 0.5)",
                  },
                ]}
              />
              <View
                style={[
                  styles.nestedMenu,
                  {
                    backgroundColor:
                      component === "KeyboardAvoidingView"
                        ? "rgba(15, 11, 9, 0.9)"
                        : "rgba(15, 11, 9, 0.5)",
                  },
                ]}
              >
                <View style={styles.nestedContentWrapper}>
                  <Text style={styles.headline}>Keyboard behavior</Text>
                  <View style={styles.nestedButtonsWrapper}>
                    <Pressable
                      onPress={() => handleBehavior(undefined)}
                      style={[
                        styles.nestedButton,
                        {
                          backgroundColor:
                            behavior === undefined
                              ? "rgba(255, 11, 9, 0.1)"
                              : "rgba(15, 11, 9, 0.5)",
                        },
                      ]}
                    >
                      <Text style={styles.nestedButtonText}>Undefined</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleBehavior("height")}
                      style={[
                        styles.nestedButton,
                        {
                          backgroundColor:
                            behavior === "height"
                              ? "rgba(255, 11, 9, 0.1)"
                              : "rgba(15, 11, 9, 0.5)",
                        },
                      ]}
                    >
                      <Text style={styles.nestedButtonText}>Height</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleBehavior("position")}
                      style={[
                        styles.nestedButton,
                        {
                          backgroundColor:
                            behavior === "position"
                              ? "rgba(255, 11, 9, 0.1)"
                              : "rgba(15, 11, 9, 0.5)",
                        },
                      ]}
                    >
                      <Text style={styles.nestedButtonText}>Position</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleBehavior("padding")}
                      style={[
                        styles.nestedButton,
                        {
                          backgroundColor:
                            behavior === "padding"
                              ? "rgba(255, 11, 9, 0.1)"
                              : "rgba(15, 11, 9, 0.1)",
                        },
                      ]}
                    >
                      <Text style={styles.nestedButtonText}>Padding</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Animated.View>
          </View>
          <View>
            <View style={styles.headlineWrapper}>
              <Text style={styles.headline}>Keyboard layout mode</Text>
            </View>

            <View style={styles.elementsWrapper}>
              <Pressable
                onPress={() => handleLayoutMode("ADJUST_NOTHING")}
                style={[
                  styles.buttonKeyboardBehavior,
                  {
                    backgroundColor:
                      layoutMode === "ADJUST_NOTHING"
                        ? "rgba(15, 11, 9, 0.9)"
                        : "rgba(15, 11, 9, 0.5)",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color:
                        layoutMode === "ADJUST_NOTHING"
                          ? palette.text.secondary
                          : palette.text.disabled,
                    },
                  ]}
                >
                  AdjustNothing
                </Text>
              </Pressable>
              <Pressable
                onPress={() => handleLayoutMode("ADJUST_PAN")}
                style={[
                  styles.buttonKeyboardBehavior,
                  {
                    backgroundColor:
                      layoutMode === "ADJUST_PAN"
                        ? "rgba(15, 11, 9, 0.9)"
                        : "rgba(15, 11, 9, 0.5)",
                  },
                ]}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      {
                        color:
                          layoutMode === "ADJUST_PAN"
                            ? palette.text.secondary
                            : palette.text.disabled,
                      },
                    ]}
                  >
                    AdjustPan
                  </Text>

                  {component === "CustomKeyboardAvoidingView" && (
                    <AntDesign
                      style={{ marginBottom: 2 }}
                      name="lock"
                      size={18}
                      color={palette.text.disabled}
                    />
                  )}
                </View>
              </Pressable>
              <Pressable
                onPress={() => handleLayoutMode("ADJUST_RESIZE")}
                style={[
                  styles.buttonKeyboardBehavior,
                  {
                    backgroundColor:
                      layoutMode === "ADJUST_RESIZE"
                        ? "rgba(15, 11, 9, 0.9)"
                        : "rgba(15, 11, 9, 0.5)",
                  },
                ]}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      {
                        color:
                          layoutMode === "ADJUST_RESIZE"
                            ? palette.text.secondary
                            : palette.text.disabled,
                      },
                    ]}
                  >
                    AdjustResize
                  </Text>
                  {component === "CustomKeyboardAvoidingView" && (
                    <AntDesign
                      style={{ marginBottom: 2 }}
                      name="lock"
                      size={18}
                      color={palette.text.disabled}
                    />
                  )}
                </View>
              </Pressable>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSubmitSettings}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Submit settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradientView>
  );
};

export { KeyboardSettings };
