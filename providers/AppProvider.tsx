import React, {
  Reducer,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Keyboard } from "react-native";
import { isIOS } from "../utils/utils";
import {
  setAdjustNothing,
  setAdjustPan,
  setAdjustResize,
  getSoftInputMode,
} from "rn-android-keyboard-adjust";
import {
  KeyboardBehaviors,
  KeyboardComponents,
  KeyboardLayoutModes,
} from "../types/keyboard";

const KEYBOARD_LAYOUT_MODES = {
  48: "ADJUST_NOTHING",
  32: "ADJUST_PAN",
  16: "ADJUST_RESIZE",
  0: "ADJUST_UNSPECIFIED",
};

type AppContextType = {
  keyboardOpen: boolean;
  keyboardHeight: number;
  keyboardSettings: {
    component: KeyboardComponents;
    layoutMode: KeyboardLayoutModes;
    behavior: KeyboardBehaviors;
  };
  setAppProvider: React.Dispatch<Partial<AppContextType>>;
};

const appProviderInitialValue: AppContextType = {
  keyboardOpen: false,
  keyboardHeight: 0,
  setAppProvider: () => {},
  keyboardSettings: {
    component: "CustomKeyboardAvoidingView",
    layoutMode: "ADJUST_NOTHING",
    behavior: undefined,
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const appProviderReducer: Reducer<AppContextType, Partial<AppContextType>> = (
  prev,
  current
) => ({ ...prev, ...current });

const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [appProvider, setAppProvider] = useReducer(
    appProviderReducer,
    appProviderInitialValue
  );

  // KeyboardWillShow event does not work on Android, on Android works KeyboardDidShow. We run the listener based on the platform and update the keyboardHeight and keyboardOpen state
  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      isIOS ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        setAppProvider({
          keyboardHeight: e.endCoordinates.height,
          keyboardOpen: true,
        });
      }
    );

    // Here we listen to the keyboardWillHide event and update the keyboardHeight and keyboardOpen state. Again keyboardWillHide does not work on Android, on Android works KeyboardDidHide
    const keyboardWillHideListener = Keyboard.addListener(
      isIOS ? "keyboardWillHide" : "keyboardDidHide",
      (e) => {
        setAppProvider({
          keyboardHeight: e.endCoordinates.height,
          keyboardOpen: false,
        });
      }
    );

    // Remove the listeners when the component unmounts
    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, [appProvider]);

  const handleKeyboardLayoutMode = (layoutMode: string) => {
    if (layoutMode === "ADJUST_NOTHING") {
      setAdjustNothing();
    } else if (layoutMode === "ADJUST_PAN") {
      setAdjustPan();
    } else {
      setAdjustResize();
    }
  };

  useEffect(() => {
    handleKeyboardLayoutMode(appProvider.keyboardSettings.layoutMode);
  }, [appProvider.keyboardSettings.layoutMode, handleKeyboardLayoutMode]);

  useEffect(() => {
    // When first render app get the keyboard layout mode
    getSoftInputMode((softInputMode) => {
      // SoftInputMode is a number which represents the current layout mode of the keyboard.
      // You can check the values here: https://developer.android.com/reference/android/view/WindowManager.LayoutParams#SOFT_INPUT_ADJUST_NOTHING

      const currentLayoutMode = KEYBOARD_LAYOUT_MODES[
        softInputMode as keyof typeof KEYBOARD_LAYOUT_MODES
      ] as KeyboardLayoutModes;
      console.log("currentLayoutMode", currentLayoutMode);
      setAppProvider({
        keyboardSettings: {
          ...appProvider.keyboardSettings,
          layoutMode: currentLayoutMode,
        },
      });
      // You can do something with the softInputMode here
    });
  }, []);

  return (
    <AppContext.Provider value={{ ...appProvider, setAppProvider }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { useAppContext, AppProvider };
