import {useState} from 'react';
import { Pressable, StyleSheet } from "react-native";

export default function FadePressable({ children, onPress }) {
  const [pressStyle, setPressStyle] = useState(styles.opaque);
  return (
    <Pressable
      style={pressStyle}
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
