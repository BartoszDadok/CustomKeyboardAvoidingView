import { default as ToastRN } from "react-native-toast-message";
import { toastConfig } from "./Toast.utils";

const Toast = () => {
  return <ToastRN config={toastConfig} />;
};

export { Toast };
