/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/start_background.png")}
        resizeMode="contain"
        style={styles.image}
      >
      <Image 
        source={require("../assets/start_background.png")}>

      </Image>
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
    // justifyContent: "center"
  },
});
