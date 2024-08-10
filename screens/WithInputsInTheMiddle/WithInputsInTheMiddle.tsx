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
import React, { useState } from "react";
import { CustomKeyboardAvoidingView } from "../../components/CustomKeyboardAvoidingView";
import { palette } from "../../theme/palette";

const KEYBOARD_OFFSET = 70;

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
  const onClickAway = () => {
    Keyboard.dismiss();
    setFocusedInputs({ login: false, password: false });
  };
  return (
    <TouchableWithoutFeedback onPress={onClickAway}>
      <View style={styles.container}>
        <LinearGradientView>
          <ScreenHeader
            onBackButton={onBackButton}
            title="With Inputs In The Middle"
          />
          <CustomKeyboardAvoidingView
            customStyles={styles.keyboardContainer}
            offset={KEYBOARD_OFFSET}
          >
            <View style={styles.contentWrapper}>
              <View style={styles.logoContainer}>
                <Logo />
                <Text style={styles.title}>With inputs in the middle</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Login"
                  placeholderTextColor={palette.grey[400]}
                  style={[
                    styles.input,
                    {
                      borderColor: focusedInputs.login
                        ? palette.grey[100]
                        : palette.grey[400],
                    },
                  ]}
                  onFocus={() => handleFocus("login")}
                  onBlur={() => handleBlur("login")}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={palette.grey[400]}
                  style={[
                    styles.input,
                    {
                      borderColor: focusedInputs.password
                        ? palette.grey[100]
                        : palette.grey[400],
                    },
                  ]}
                  onFocus={() => handleFocus("password")}
                  onBlur={() => handleBlur("password")}
                  secureTextEntry
                />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </CustomKeyboardAvoidingView>
        </LinearGradientView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { WithInputsInTheMiddle };
