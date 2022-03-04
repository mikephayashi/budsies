import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import FadePressable from "../components/FadePressable";
import Header from "../components/Header";

export default function HomeItem({
  onPress,
  title,
  buttonText,
  image,
  popQuestion,
}) {
  return (
    <View style={styles.row}>
      <Image style={styles.icon} source={image} />
      <View style={styles.rest}>
        <Header title={title} popQuestion={popQuestion} />
        <FadePressable onPress={() => onPress()}>
          <View style={styles.block1}>
            <View style={styles.big_title_box}>
              <Text style={styles.big_title} ellipsizeMode={"clip"}>
                {buttonText}
              </Text>
            </View>
          </View>
        </FadePressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: "2%",
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    flex: 1,
  },
  rest: {
    flex: 6,
  },
  block1: {
    width: "40%",
    flexGrow: 1,
    backgroundColor: "#f5f5fa00",
    borderRadius: 32,
    overflow: "hidden",
    borderStyle: "solid",
    borderColor: "#f5f5faff",
    borderWidth: 3,
    marginTop: "1%",
  },
  big_title: {
    color: "#ffffffff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 40,
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  big_title_box: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
