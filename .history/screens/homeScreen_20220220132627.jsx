/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";

export default function Home({ item, navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="contain"
        style={styles.image}
      >
        <Text>Home</Text>
        <Button
          style={"margin-top: 50px;"}
          title="Back"
          onPress={() => navigation.pop()}
        />
        <Button
          style={"margin-top: 50px;"}
          title="Create Room"
          onPress={() => navigation.pop()}
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
    // justifyContent: "center"
  },
});
