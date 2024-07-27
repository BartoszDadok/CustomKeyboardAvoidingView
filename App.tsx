import { AppProvider } from "./providers/AppProvider";
import { Root } from "./root/root";

export default function App() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}
