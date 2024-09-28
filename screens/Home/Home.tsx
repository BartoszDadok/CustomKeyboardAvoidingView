import { styles } from "./Home.styles";
import { LinearGradientView } from "../../components/LinearGradientView/LinearGradientView";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types";
import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  TextInput,
  LayoutChangeEvent,
} from "react-native";
import { Logo } from "../../components/Logo/Logo";
import { palette } from "../../theme/palette";
import { CustomKeyboardAvoidingView } from "../../components/CustomKeyboardAvoidingView";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { useAppContext } from "../../providers/AppProvider";
import { BackdropInput } from "../../components/Backdrop/BackdropInput";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const INPUT_MARGIN_BOTTOM = 7;

const Home = () => {
  const { keyboardOpen } = useAppContext();
  const [inputHeight, setInputHeight] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const tabBarHeight = useBottomTabBarHeight();

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
      <View style={styles.screenContainer}>
        <LinearGradientView>
          <CustomKeyboardAvoidingView
            positionBottom={true}
            screenWithBottomTabNavigation={true}
            animatedPaddingTopValue={300}
            customStyles={styles.keyboardContainer}
          >
            <View style={styles.contentContainer}>
              <Logo />
              <ScrollView
                horizontal
                style={styles.buttonsContainer}
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
            <View>
              {keyboardOpen && <BackdropInput />}
              <TextInput
                placeholder="Type something..."
                placeholderTextColor={palette.grey[400]}
                multiline={true}
                style={[
                  styles.input,
                  {
                    borderColor: isFocused
                      ? palette.grey[100]
                      : palette.grey[400],
                    marginBottom: INPUT_MARGIN_BOTTOM,
                  },
                ]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                selectionColor={palette.text.secondary}
                onLayout={handleLayout}
              />
            </View>
            {keyboardOpen && (
              <Backdrop
                customStyles={{
                  marginBottom: inputHeight + INPUT_MARGIN_BOTTOM,
                }}
              />
            )}
          </CustomKeyboardAvoidingView>
        </LinearGradientView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { Home };
