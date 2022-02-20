/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Home(props) {
  return (
    <View>
      <ImageBackground
        style={styles.container}
        source={require("../assets/start_background.png")}
        resizeMode="contain"
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
    flex: 1,
  },
});
