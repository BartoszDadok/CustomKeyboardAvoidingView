import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WithoutBottomTab } from "../screens/WithoutBottomTab/WithoutBottomTab";
import { WithInputsInTheMiddle } from "../screens/WithInputsInTheMiddle/WithInputsInTheMiddle";
import { BottomTab } from "../components/BottomTab/BottomTab";

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
};

export { Navigator };
