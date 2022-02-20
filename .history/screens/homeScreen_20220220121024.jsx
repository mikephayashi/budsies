/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/start_background.png")}
        resizeMode="contain"
        style={styles.image}
      >
        <Text>Test</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    backgroundColor: "red",
    // flex: 1,
  },
  image: {
    // flex: 1,
    // justifyContent: "center"
  },
});
