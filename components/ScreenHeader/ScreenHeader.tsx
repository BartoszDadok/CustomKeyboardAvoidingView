import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ScreenHeader.styles";
import { Icon } from "react-native-paper";
import { palette } from "../../theme/palette";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenHeader = ({
  title,
  onBackButton,
}: {
  title: string;
  onBackButton: () => void;
}) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.screenHeaderContainer, { height: top + 50 }]}>
      <TouchableOpacity onPress={onBackButton}>
        <Icon size={24} source="arrow-left" color={palette.text.primary} />
      </TouchableOpacity>
      <Text style={styles.screenHeaderTitle}>{title}</Text>
    </View>
  );
};

export { ScreenHeader };
