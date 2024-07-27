import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./LinearGradientView.styles";
import { palette } from "../../theme/palette";
import { StatusBar } from "expo-status-bar";

type Children = {
  children: JSX.Element | JSX.Element[];
};

const LinearGradientView = ({ children }: Children) => {
  return (
    <LinearGradient
      colors={[palette.gradient.start, palette.gradient.end]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar style="light" />
      {children}
    </LinearGradient>
  );
};

export { LinearGradientView };
