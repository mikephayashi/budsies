import React from "react";
import { StyleSheet, View } from "react-native";
import WhiteButton from "./WhiteButton";

export default function NextButton({
  screen,
  navigation,
  payload,
  callBack,
  title,
}) {
  return (
      <WhiteButton
        style={styles.position}
        title={title ?? "Next"}
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
  // relative: {
  //   position: "relative",
  //   backgroundColor: "red",
  //   width: "100%",
  //   height: "100%",
  // },
  position: {
    position: "absolute",
    right: "4%",
    bottom: -680,
  },
});
