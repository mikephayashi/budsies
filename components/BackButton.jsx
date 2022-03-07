import React, {useContext} from "react";
import { StyleSheet, ImageBackground } from "react-native";
import FadePressable from "../components/FadePressable";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function BackButton({ navigation, show }) {
  const Images = useContext(ImagesContext);
  return show ? (
    <FadePressable onPress={() => navigation.pop()}>
      <ImageBackground
        style={[styles.image, styles.image_layout]}
        source={Images[getImage('back_button')]}
      />
    </FadePressable>
  ) : null;
}

BackButton.defaultProps = {
  show: true,
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#e93030ff",
    overflow: "hidden",
  },
  block_layout: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 235,
    flexShrink: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  image: {
    resizeMode: "contain",
  },
  image_layout: {
    marginTop: 35,
    height: 29,
    marginLeft: 30,
    width: 17,
    minWidth: 17,
  },
});
