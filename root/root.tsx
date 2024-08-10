import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "../routes";

preventAutoHideAsync();

const Root = () => {
  const [isAppReady, setIsAppReady] = useState<null | boolean>(null);

  const [fontsLoaded, fontError] = useFonts({
    "NunitoSans-ExtraBold": require("../assets/fonts/NunitoSans-ExtraBold.ttf"),
    "NunitoSans-Bold": require("../assets/fonts/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
    "NunitoSans-Light": require("../assets/fonts/NunitoSans-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setIsAppReady(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (isAppReady) hideAsync();
  }, [isAppReady]);

  return isAppReady ? (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </NavigationContainer>
  ) : null;
};

export { Root };
