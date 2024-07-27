import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Home.styles";
import { LinearGradientView } from "../../components/LinearGradientView/LinearGradientView";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Logo } from "../../components/Logo/Logo";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types";
import { useEffect, useState } from "react";
import { SettingsButton } from "../../components/SettingsButton/SettingsButton";
import { useAppContext } from "../../providers/AppProvider";
import { CustomKeyboardAvoidingView } from "../../components/CustomKeyboardAvoidingView";
import { SettingsInfoData } from "../../components/SettingsInfoData/SettingsInfoData";
import { KeyboardLayoutModes } from "../../types/keyboard";
import { getSoftInputMode } from "rn-android-keyboard-adjust";

const Home = () => {
  const {
    keyboardSettings: { component, layoutMode, behavior },
  } = useAppContext();
  const [isFocused, setIsFocused] = useState(false);
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const gotToScreenWithoutBottomTab = () => {
    navigate("WithoutBottomTab");
  };
  const gotToScreenWithInputs = () => {
    navigate("WithInputsInTheMiddle");
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const KEYBOARD_LAYOUT_MODES = {
    48: "ADJUST_NOTHING",
    32: "ADJUST_PAN",
    16: "ADJUST_RESIZE",
    0: "ADJUST_UNSPECIFIED",
  };
  useEffect(() => {
    console.log("LAYOUT_MODE");
    // When first render app get the keyboard layout mode
    getSoftInputMode((softInputMode) => {
      const currentLayoutMode = KEYBOARD_LAYOUT_MODES[
        softInputMode as keyof typeof KEYBOARD_LAYOUT_MODES
      ] as KeyboardLayoutModes;

      console.log("currentLayoutMode", currentLayoutMode);
    });
  }, [layoutMode]);

  return (
    <LinearGradientView>
      <SafeAreaView edges={["top"]} style={styles.container}>
        {component === "CustomKeyboardAvoidingView" ? (
          <CustomKeyboardAvoidingView
            inputAtBottomScreen={true}
            containBottomTabNavigator={true}
            customStyles={{ flex: 1 }}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.wrapper}>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                  }}
                >
                  <SettingsButton />
                  <SettingsInfoData />
                </View>
                <View style={styles.contentContainer}>
                  <Logo />
                  <ScrollView
                    horizontal
                    contentContainerStyle={styles.buttonsContainer}
                    showsHorizontalScrollIndicator={false}
                  >
                    <TouchableOpacity
                      onPress={gotToScreenWithoutBottomTab}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>
                        Go to screen without bottom tab
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={gotToScreenWithInputs}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>
                        Go to screen with inputs in the middle
                      </Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>

                <TextInput
                  placeholder="Type something..."
                  placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
                  multiline={true}
                  style={[
                    styles.input,
                    {
                      borderColor: isFocused
                        ? "rgba(255, 255, 255, 0.9)"
                        : "rgba(255, 255, 255, 0.5)",
                    },
                  ]}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>
            </TouchableWithoutFeedback>
          </CustomKeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={behavior}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.wrapper}>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                  }}
                >
                  <SettingsButton />
                  <SettingsInfoData />
                </View>
                <View style={styles.contentContainer}>
                  <Logo />
                  <ScrollView
                    horizontal
                    contentContainerStyle={styles.buttonsContainer}
                    showsHorizontalScrollIndicator={false}
                  >
                    <TouchableOpacity
                      onPress={gotToScreenWithoutBottomTab}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>
                        Go to screen without bottom tab
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={gotToScreenWithInputs}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>
                        Go to screen with inputs in the middle
                      </Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>

                <TextInput
                  placeholder="Type something..."
                  placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
                  multiline={true}
                  style={[
                    styles.input,
                    {
                      borderColor: isFocused
                        ? "rgba(255, 255, 255, 0.9)"
                        : "rgba(255, 255, 255, 0.5)",
                    },
                  ]}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )}
      </SafeAreaView>
    </LinearGradientView>
  );
};

export { Home };
