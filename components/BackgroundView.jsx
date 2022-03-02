import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import BackButton from "../components/BackButton";

export default function BackgroundView({
  children,
  navigation,
  showBack,
  backgroundImg,
  showLogo,
}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg ?? require("../assets/background2.png")}
        resizeMode="contain"
        style={styles.backgroundImage}
      >
        <View style={styles.row}>
          {(showBack ?? true) ? <BackButton navigation={navigation} /> : null}
          {(showLogo ?? true) ? (
            <Image
              style={styles.image}
              source={require("../assets/white_logo.png")}
            />
          ) : null}
        </View>
        {children}
      </ImageBackground>
    </View>
  );
}

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
