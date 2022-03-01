import React from "react-native";
import { View, StyleSheet, ImageBackground } from "react-native";
import FadePressable from "./FadePressable";

export default function ScrollFrame({navigation, room, thumbnail, onPress}) {
  return (
    <FadePressable
        onPress = {() => onPress()}
    >
      <View style={styles.container}>
        <ImageBackground
          source={thumbnail}
          resizeMode="contain"
          style={styles.thumbnail}
        />
      </View>
    </FadePressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
  },
  thumbnail: {
    flex: 1,
  },
});
