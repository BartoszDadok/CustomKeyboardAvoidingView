import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LinearGradientView } from "../../components/LinearGradientView/LinearGradientView";
import { ScreenHeader } from "../../components/ScreenHeader/ScreenHeader";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./WithInputsInTheMiddle.styles";
import { Logo } from "../../components/Logo/Logo";
import { fonts } from "../../fonts";
import { palette } from "../../theme/palette";
import React, { useEffect, useState } from "react";
import { setAdjustResize, setAdjustNothing } from "rn-android-keyboard-adjust";
import { SettingsButton } from "../../components/SettingsButton/SettingsButton";

const WithInputsInTheMiddle = () => {
  const [focusedInputs, setFocusedInputs] = useState({
    login: false,
    password: false,
  });
  const { goBack } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onBackButton = () => {
    goBack();
  };

  const handleFocus = (input: string) => {
    setFocusedInputs({ ...focusedInputs, [input]: true });
  };

  const handleBlur = (input: string) => {
    setFocusedInputs({ ...focusedInputs, [input]: false });
  };

  // useEffect(() => {
  //   setAdjustNothing();
  // }, []);

  return (
    <LinearGradientView>
      <ScreenHeader
        onBackButton={onBackButton}
        title="With inputs in the middle"
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contentWrapper}>
          <SettingsButton />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingBottom: 200,
              paddingHorizontal: 16,
            }}
          >
            <View style={styles.logoContainer}>
              <Logo />
              <Text style={styles.title}>With inputs in the middle</Text>
            </View>
            <View style={{ gap: 10 }}>
              <TextInput
                placeholder="Login"
                placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
                multiline={true}
                style={[
                  styles.input,
                  {
                    borderColor: focusedInputs.login
                      ? "rgba(255, 255, 255, 0.9)"
                      : "rgba(255, 255, 255, 0.5)",
                  },
                ]}
                onFocus={() => handleFocus("login")}
                onBlur={() => handleBlur("login")}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
                multiline={true}
                style={[
                  styles.input,
                  {
                    borderColor: focusedInputs.password
                      ? "rgba(255, 255, 255, 0.9)"
                      : "rgba(255, 255, 255, 0.5)",
                  },
                ]}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
              />
              <TouchableOpacity
                style={{
                  marginTop: 7,
                  borderRadius: 4,
                  alignSelf: "center",
                  width: "100%",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: "rgba(15, 11, 9, 0.5)",
                  borderWidth: 1,
                  borderColor: "rgba(15, 11, 9, 0.1)",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: fonts.regular,
                    color: palette.text.primary,
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradientView>
  );
};

export { WithInputsInTheMiddle };
