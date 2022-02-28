import React from "react";
import { StyleSheet } from "react-native";
import WhiteButton from "./WhiteButton";

export default function NextButton({ screen, navigation }) {
  return (
    <WhiteButton
      style={styles.position}
      title="Next"
      onPress={() => navigation.navigate(screen)}
    />
  );
}

const styles = StyleSheet.create({
  position: {
    position: "absolute",
    right: "4%",
    bottom: -680,
  },
});
