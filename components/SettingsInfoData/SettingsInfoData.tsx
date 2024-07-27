import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./SettingsInfoData.styles";
import { useAppContext } from "../../providers/AppProvider";
import { Ionicons } from "@expo/vector-icons";
import { palette } from "../../theme/palette";
import { useEffect, useState } from "react";
import { fonts } from "../../fonts";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const LAYOUT_LABELS = {
  ADJUST_NOTHING: "Adjust nothing",
  ADJUST_RESIZE: "Adjust resize",
  ADJUST_PAN: "Adjust pan",
};
const SettingsInfoData = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const width = useSharedValue(0);
  const opacity = useSharedValue(0);

  const {
    keyboardSettings: { component, layoutMode, behavior },
  } = useAppContext();

  const handleInfo = () => {
    setInfoVisible((prev) => !prev);
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    width.value = withTiming(infoVisible ? 260 : 0, { duration: 300 }); // Adjust 100 to your desired open height
    opacity.value = withTiming(infoVisible ? 1 : 0, { duration: 300 }); // Adjust 100 to your desired open height
  }, [infoVisible]);

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "flex-end",
        marginTop: 9,
      }}
    >
      <Animated.View
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 4,
            height: 100,
          },
          animatedStyle,
        ]}
      >
        <View style={{ alignItems: "flex-start" }}>
          <Text
            numberOfLines={1}
            style={[
              styles.infoText,
              { fontFamily: fonts.bold, marginBottom: 4, fontSize: 14 },
            ]}
          >
            Current keyboard settings:
          </Text>

          <Text numberOfLines={1} style={styles.infoText}>
            <Text style={{ fontFamily: fonts.bold }}>Component: </Text>
            {component}
          </Text>
          <Text numberOfLines={1} style={styles.infoText}>
            <Text style={{ fontFamily: fonts.bold }}>Layout: </Text>
            {LAYOUT_LABELS[layoutMode]}
          </Text>
          <Text numberOfLines={1} style={styles.infoText}>
            <Text style={{ fontFamily: fonts.bold }}>Behavior: </Text>
            {behavior === undefined ? "Undefined" : behavior}
          </Text>
        </View>
      </Animated.View>
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleInfo}>
        <Ionicons
          name="information-circle-outline"
          size={27}
          color={infoVisible ? palette.text.primary : palette.text.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};
export { SettingsInfoData };
