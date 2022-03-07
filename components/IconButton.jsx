import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FadePressable from "../components/FadePressable";

export default function IconButton({ label, image, onPress }) {
  return (
    <FadePressable onPress={() => onPress()}>
      <View style={styles.column}>
        <Image style={styles.icon} source={image} />
        <Text style={styles.small_text_body} ellipsizeMode={"clip"}>
          {label}
        </Text>
      </View>
    </FadePressable>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
  icon: {
    height: "40%",
    width: "100%",
    resizeMode: "contain"
  },
  small_text_body: {
    color: "#ffffffff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 40,
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
