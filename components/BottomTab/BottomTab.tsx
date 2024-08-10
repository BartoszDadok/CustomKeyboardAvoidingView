import { Text } from "react-native";
import { palette } from "../../theme/palette";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../screens/Home/Home";
import { ButtonBottom } from "../../screens/ButtonBottom/ButtonBottom";
import { styles } from "./BottomTab.styles";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const screenOptions = {
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
  };

  const tabHomeOptions = {
    tabBarLabel: ({ focused }: { focused: boolean }) => (
      <Text
        style={[
          styles.label,
          {
            color: focused ? palette.text.primary : palette.text.secondary,
          },
        ]}
      >
        Bottom Tab Navigator
      </Text>
    ),

    tabBarIcon: ({ focused }: { size: number; focused: boolean }) => (
      <MaterialCommunityIcons
        name="keyboard-variant"
        size={22}
        color={focused ? palette.text.primary : palette.text.secondary}
      />
    ),
  };

  const tabButtonBottomOptions = {
    tabBarLabel: ({ focused }: { focused: boolean }) => (
      <Text
        style={[
          styles.label,
          {
            color: focused ? palette.text.primary : palette.text.secondary,
          },
        ]}
      >
        Button Bottom
      </Text>
    ),
    tabBarIcon: ({ focused }: { size: number; focused: boolean }) => (
      <MaterialCommunityIcons
        name="picture-in-picture-bottom-right-outline"
        size={18}
        color={focused ? palette.text.primary : palette.text.secondary}
      />
    ),
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} options={tabHomeOptions} />
      <Tab.Screen
        name="ButtonBottom"
        component={ButtonBottom}
        options={tabButtonBottomOptions}
      />
    </Tab.Navigator>
  );
};

export { BottomTab };
