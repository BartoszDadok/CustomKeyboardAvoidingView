import { Text, View } from "react-native";
import { styles } from "./Logo.styles";
import { isIOS } from "../../utils/utils";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { palette } from "../../theme/palette";

const Logo = () => {
  return (
    <>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="keyboard-variant"
          size={70}
          color={palette.text.secondary}
        />
      </View>
      <Text style={styles.logo}>Keyboard Avoiding View</Text>
      <Text style={styles.logo}>{isIOS ? "IOS" : "Android"}</Text>
    </>
  );
};
export { Logo };
