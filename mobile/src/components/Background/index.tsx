import { ImageBackground } from "react-native";
import { styles } from "./styles";

import backgroundPng from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      style={styles.container}
      source={backgroundPng}
      defaultSource={backgroundPng}
    >
      {children}
    </ImageBackground>
  );
}
