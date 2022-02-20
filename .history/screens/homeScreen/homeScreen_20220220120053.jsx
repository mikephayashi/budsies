/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { Text, ImageBackground } from "react-native";
import './homeScreen.css';

export default function Home(props) {
  return (
    <View>
      <ImageBackground
        className="container"
        source={require("../../assets/start_background.png")}
        resizeMode="contain"
      >
        <Text>Test</Text>
      </ImageBackground>
    </View>
  );
}