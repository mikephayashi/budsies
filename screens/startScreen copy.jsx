import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import StartButton from '../components/StartButton';

export default function StartScreen({ item, navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/start_background.png")}
        resizeMode="contain"
        style={styles.image}
      >
      <StartButton navigation={navigation}/>
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
