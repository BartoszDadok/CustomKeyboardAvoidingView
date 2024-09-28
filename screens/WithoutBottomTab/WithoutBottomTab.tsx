import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./WithoutBottomTab.styles";
import {
  Keyboard,
  LayoutChangeEvent,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LinearGradientView } from "../../components/LinearGradientView/LinearGradientView";
import { Logo } from "../../components/Logo/Logo";
import { ScreenHeader } from "../../components/ScreenHeader/ScreenHeader";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { CustomKeyboardAvoidingView } from "../../components/CustomKeyboardAvoidingView";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { useAppContext } from "../../providers/AppProvider";
import { BackdropInput } from "../../components/Backdrop/BackdropInput";
import { palette } from "../../theme/palette";

const INPUT_MARGIN_BOTTOM = 7;

const WithoutBottomTab = () => {
  const { keyboardOpen } = useAppContext();
  const [isFocused, setIsFocused] = useState(false);
  const [inputHeight, setInputHeight] = useState(0);
  const { bottom } = useSafeAreaInsets();
  const { goBack } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onBackButton = () => {
    goBack();
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const onClickAway = () => {
    Keyboard.dismiss();
    setIsFocused(false);
  };
  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setInputHeight(height);
  };

  return (
    <TouchableWithoutFeedback onPress={onClickAway}>
      <View style={styles.container}>
        <LinearGradientView>
          <ScreenHeader
            onBackButton={onBackButton}
            title="Without Bottom Tab"
          />

          <CustomKeyboardAvoidingView
            screenWithBottomTabNavigation={false}
            positionBottom={true}
            animatedPaddingTopValue={250}
            customStyles={styles.keyboardContainer}
            offset={bottom}
          >
            <View style={[styles.contentContainer, { paddingBottom: bottom }]}>
              <View style={styles.logoContainer}>
                <Logo />
                <Text style={styles.title}>Without Bottom Tab</Text>
              </View>
              <View>
                {keyboardOpen && <BackdropInput />}
                <TextInput
                  placeholder="Type something..."
                  placeholderTextColor={palette.grey[400]}
                  multiline={true}
                  style={[
                    styles.inputStyle,
                    {
                      borderColor: isFocused
                        ? palette.grey[100]
                        : palette.grey[400],
                      marginBottom: INPUT_MARGIN_BOTTOM,
                    },
                  ]}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onLayout={handleLayout}
                />
              </View>
            </View>
            {keyboardOpen && (
              <Backdrop
                customStyles={{
                  marginBottom: inputHeight + bottom + INPUT_MARGIN_BOTTOM,
                }}
              />
            )}
          </CustomKeyboardAvoidingView>
        </LinearGradientView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { WithoutBottomTab };
