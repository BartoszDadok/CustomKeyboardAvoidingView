import { View } from "react-native";
import { styles } from "./BackdropInput.styles";
const BackdropInput = () => {
  return (
    <>
      <View style={styles.leftInputSurrounding} />
      <View style={styles.rightInputSurrounding} />
      <View style={styles.bottomInputSurrounding} />
    </>
  );
};

export { BackdropInput };
