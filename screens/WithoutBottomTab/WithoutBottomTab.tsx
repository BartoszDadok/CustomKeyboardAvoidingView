import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { styles } from "./WithoutBottomTab.styles";
import {
  Keyboard,
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
import { SettingsButton } from "../../components/SettingsButton/SettingsButton";

const WithoutBottomTab = () => {
  const [isFocused, setIsFocused] = useState(false);
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

  return (
    <LinearGradientView>
      <ScreenHeader onBackButton={onBackButton} title="Without Bottom Tab" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.contentContainer, { paddingBottom: bottom }]}>
          <SettingsButton />
          <View style={styles.logoContainer}>
            <Logo />
            <Text style={styles.title}>Without Bottom Tab</Text>
          </View>

          <TextInput
            placeholder="Type something..."
            placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
            multiline={true}
            style={[
              styles.inputStyle,
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
    </LinearGradientView>
  );
};

export { WithoutBottomTab };
