/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home({ item, navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button style={"margin-top: 50px;"} title="Home" onPress={() => navigation.navigate('Home')}/>
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
