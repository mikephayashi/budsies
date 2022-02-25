import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

export default function BackgroundView({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="contain"
        style={styles.image}
      >
      {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
