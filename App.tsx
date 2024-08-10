import { AppProvider } from "./providers/AppProvider";
import { Root } from "./root/root";
import { Text, TextProps } from "react-native";

type TextWithDefaultProps = TextProps & {
  defaultProps?: Partial<TextProps>;
};

const TextComponent = Text as TextWithDefaultProps;

export default function App() {
  TextComponent.defaultProps = TextComponent.defaultProps || {};
  TextComponent.defaultProps.allowFontScaling = false;
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}
