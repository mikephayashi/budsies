import React, {useContext} from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import BackButton from "../components/BackButton";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function BackgroundView({
  children,
  navigation,
  showBack,
  backgroundImg,
  showLogo,
}) {
  const Images = useContext(ImagesContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg ?? Images[getImage('background')]}
        resizeMode="contain"
        style={styles.backgroundImage}
      >
        <View style={styles.row}>
          {(showBack ?? true) ? <BackButton navigation={navigation} /> : null}
          {(showLogo ?? true) ? (
            <Image
              style={styles.image}
              source={Images[getImage('white_logo')]}
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
