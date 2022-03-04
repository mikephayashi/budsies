import {useState} from 'react';
import { Pressable, StyleSheet } from "react-native";

export default function FadePressable({ children, onPress, style }) {
  const [pressStyle, setPressStyle] = useState(styles.opaque);
  return (
    <Pressable
      style={{...style, ...pressStyle}}
      onPress={() => onPress()}
      onPressIn={() => setPressStyle(styles.transparent)}
      onPressOut={() => setPressStyle(styles.opaque)}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  opaque: {
    opacity: 1.0,
  },
  transparent: {
    opacity: 0.5,
  },
});
