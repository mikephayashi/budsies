import React from "react";
import { StyleSheet, Image, View, ImageBackground, Button } from "react-native";

export default function StartScreen({ item, navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/start_background.png")}
        resizeMode="contain"
        style={styles.image}
      >
        <Image source={require("../assets/logo.png")}/>
        <Button style={styles.button} title="Home" onPress={() => navigation.pop()}/>
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
  button: {
      backgroundColor: 
  }
});
