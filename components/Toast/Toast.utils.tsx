import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from "react-native-toast-message";
import { styles } from "./Toast.styles";

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast {...props} style={styles.success} text1Style={styles.text} />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast {...props} style={styles.error} text1Style={styles.text} />
  ),
};

export { toastConfig };
