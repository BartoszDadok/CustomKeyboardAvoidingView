import React, {
  Reducer,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Keyboard } from "react-native";
import { isIOS } from "../utils/utils";
type AppContextType = {
  keyboardOpen: boolean;
  keyboardHeight: number;

  setAppProvider: React.Dispatch<Partial<AppContextType>>;
};

const appProviderInitialValue: AppContextType = {
  keyboardOpen: false,
  keyboardHeight: 0,
  setAppProvider: () => {},
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
