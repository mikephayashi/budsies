import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import BackButton from "../components/BackButton";

export default function BackgroundView({ children, navigation, showBack }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background2.png")}
        resizeMode="contain"
        style={styles.backgroundImage}
      >
        <View style={styles.row}>
          {showBack ? <BackButton navigation={navigation} /> : null}
          <Image
            style={styles.image}
            source={require("../assets/white_logo.png")}
          ></Image>
        </View>
        {children}
      </ImageBackground>
    </View>
  );
}

BackgroundView.defaultProps = {
  showBack: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  backgroundImage: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
