import React from "react";
import { StyleSheet, ImageBackground, Pressable } from 'react-native';
import FadePressable from "../components/FadePressable";

export default function BackButton({ navigation }) {
  return (
    <FadePressable
    onPress={() => navigation.pop()}
  >
      <ImageBackground
        style={[styles.image, styles.image_layout]}
        source={require("../assets/back_button.png")}
      />
    </FadePressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#e93030ff',
    overflow: 'hidden'
  },
  block_layout: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 235,
    flexShrink: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  image: {
    resizeMode: 'contain'
  },
  image_layout: {
    marginTop: 70,
    height: 29,
    marginLeft: 176,
    width: 17,
    minWidth: 17
  },
});

