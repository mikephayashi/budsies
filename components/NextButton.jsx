import React from "react";
import { StyleSheet } from "react-native";
import WhiteButton from "./WhiteButton";

export default function NextButton({ screen, navigation, payload, callBack, title }) {
  return (
    <WhiteButton
      style={styles.position}
      title= {title ?? "Next"}
      onPress={() => {
        callBack();
        if (callBack === undefined) {
          navigation.navigate(screen, payload);
        }
      }}
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
