import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./ButtonBottom.styles";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LinearGradientView } from "../../components/LinearGradientView/LinearGradientView";
import { useState } from "react";
import { CustomKeyboardAvoidingView } from "../../components/CustomKeyboardAvoidingView";
import { palette } from "../../theme/palette";

const ButtonBottom = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { top } = useSafeAreaInsets();

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <LinearGradientView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, { paddingTop: top }]}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Message:</Text>
            <TextInput
              placeholder="Type message..."
              placeholderTextColor={palette.grey[400]}
              multiline={true}
              style={[
                styles.inputStyle,
                {
                  borderColor: isFocused
                    ? palette.grey[100]
                    : palette.grey[400],
                },
              ]}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </View>

          <CustomKeyboardAvoidingView
            inputAtBottomScreen={true}
            containBottomTabNavigator={true}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </CustomKeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradientView>
  );
};

export { ButtonBottom };
