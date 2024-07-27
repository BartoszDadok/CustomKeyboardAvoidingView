import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WithoutBottomTab } from "../screens/WithoutBottomTab/WithoutBottomTab";
import { palette } from "../theme/palette";
import { WithInputsInTheMiddle } from "../screens/WithInputsInTheMiddle/WithInputsInTheMiddle";
import { KeyboardSettings } from "../screens/KeyboardSettings/KeyboardSettings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: palette.black[200],
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="WithoutBottomTab" component={WithoutBottomTab} />
      <Stack.Screen
        name="WithInputsInTheMiddle"
        component={WithInputsInTheMiddle}
      />
      <Stack.Screen
        options={{ animation: "slide_from_bottom" }}
        name="KeyboardSettings"
        component={KeyboardSettings}
      />
    </Stack.Navigator>
  );
};

export { Navigator };
