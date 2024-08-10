import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ScreenHeader.styles";
import { palette } from "../../theme/palette";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const MARGIN_TOP = 50;

const ScreenHeader = ({
  title,
  onBackButton,
}: {
  title: string;
  onBackButton: () => void;
}) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.screenHeaderContainer, { height: top + MARGIN_TOP }]}>
      <TouchableOpacity onPress={onBackButton}>
        <AntDesign name="arrowleft" size={24} color={palette.text.primary} />
      </TouchableOpacity>
      <Text style={styles.screenHeaderTitle}>{title}</Text>
    </View>
  );
};

export { ScreenHeader };
