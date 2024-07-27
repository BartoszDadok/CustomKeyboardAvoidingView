import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../routes/types";
import { styles } from "./SettingsButton.styles";

const SettingsButton = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSettings = () => {
    navigate("KeyboardSettings");
  };

  return (
    <TouchableOpacity onPress={handleSettings} style={styles.button}>
      <Text style={styles.buttonText}>Keyboard settings</Text>
    </TouchableOpacity>
  );
};

export { SettingsButton };
