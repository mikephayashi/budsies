import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import BackButton from "../components/BackButton";

export default function BackgroundView({ children, navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="contain"
        style={styles.image}
      >
      <BackButton navigation={navigation} />
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
