import React from "react";
import { StyleSheet, Image, View, ImageBackground, Button } from "react-native";
import { WebView } from 'react-native-webview';

export default function StartScreen({ item, navigation }) {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://www.coolmathgames.com/0-four-in-a-row#immersiveModal",
        }}
      />
      <ImageBackground
        source={require("../assets/start_background.png")}
        resizeMode="contain"
        style={styles.image}
      >
        <Image source={require("../assets/logo.png")} />
        <Button
          color="white"
          title="Home"
          onPress={() => navigation.navigate("Home")}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
