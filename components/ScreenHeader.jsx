import {useContext} from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import FadePressable from "./FadePressable";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function Header({ title, popQuestion }) {
  const Images = useContext(ImagesContext);
  return (
    <>
      <View style={styles.column}>
        <Text style={styles.hero_title} ellipsizeMode={"clip"}>
          {title}
        </Text>
        <Image style={styles.characters} source={Images[getImage('Characters_For_Screens')]}/>
      </View>

      <View style={styles.box} />
    </>
  );
}

const styles = StyleSheet.create({
  question: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    height: 1,
    width: "80%",
    backgroundColor: "#ffffffff",
    marginLeft: "auto",
    marginRight: "auto",
  },
  hero_title: {
    color: "#ffffffff",
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 48,
    fontSize: 40,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  characters: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
  }
});
