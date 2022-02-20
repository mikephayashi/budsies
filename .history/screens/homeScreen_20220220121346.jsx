/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
