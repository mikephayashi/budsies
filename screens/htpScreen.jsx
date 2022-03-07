import { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import WhiteButton from "../components/WhiteButton";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function HTPScreen({ navigation }) {
  const Images = useContext(ImagesContext);
  const [curScreen, setCurScreen] = useState(1);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={Images[getImage("htp" + curScreen)]}
      >
        {curScreen < 15 ? (
          <WhiteButton
            title="Next"
            style={styles.next}
            onPress={() => setCurScreen(curScreen + 1)}
          />
        ) : null}
        {curScreen < 15 ? (
          <WhiteButton
            title="Skip"
            style={styles.skip}
            onPress={() => navigation.popToTop()}
          />
        ) : null}
        {curScreen == 15 ? (
          <WhiteButton
            title="Finish"
            style={styles.next}
            onPress={() => navigation.popToTop()}
          />
        ) : null}
        {curScreen > 1 ? (
          <WhiteButton
            title="Back"
            style={styles.back}
            onPress={() => setCurScreen(curScreen - 1)}
          />
        ) : null}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  skip: {
    position: "absolute",
    right: "4%",
    top: 80,
  },
  back: {
    position: "absolute",
    left: "4%",
    bottom: -780,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  next: {
    position: "absolute",
    right: "4%",
    bottom: -780,
  },
});
