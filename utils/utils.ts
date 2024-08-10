import { Dimensions, Platform } from "react-native";

const isIOS = Platform.OS === "ios";

const SCREEN_WIDTH = Dimensions.get("window").width;
const isBigHeightScreen = Dimensions.get("window").height > 800;

export { isIOS, isBigHeightScreen, SCREEN_WIDTH };
