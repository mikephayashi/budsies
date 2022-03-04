import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import FadePressable from "../components/FadePressable";
import { avatarImages } from "../shared/avatarImages";

export default function JasperSelector({
  hat,
  setHat,
  setSkin,
  setShirt,
  glasses,
  setGlasses,
  getAvatarUri,
}) {
  const handleGlasses = () => {
    if (glasses === "None") {
      setGlasses("Brown");
    } else if (glasses === "Brown") {
      setGlasses("None");
    }
  };

  const handleHat = () => {
    if (hat === "None") {
      setHat("Grey");
    } else if (hat === "Grey") {
      setHat("None");
    }
  };

  return (
    <View style={styles.bigRow}>
      <Image style={styles.avatar} source={avatarImages[getAvatarUri()]} />
      <View style={styles.column}>
        <View style={styles.row}>
          <FadePressable onPress={() => handleGlasses()}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Brown_Glasses_Icon.png")}
            />
          </FadePressable>
          <FadePressable onPress={() => handleHat()}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Grey_Hat_Icon.png")}
            />
          </FadePressable>
        </View>
        <View style={styles.row}>
          <FadePressable onPress={() => setSkin("Light")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Light_Skin_Tone_Icon.png")}
            />
          </FadePressable>
          <FadePressable onPress={() => setSkin("Tan")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Tan_Skin_Tone_Icon.png")}
            />
          </FadePressable>
          <FadePressable onPress={() => setSkin("Golden")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Golden_Skin_Tone_Icon.png")}
            />
          </FadePressable>
        </View>
        <View style={styles.row}>
          <FadePressable onPress={() => setShirt("White")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/White_Shirt_Icon.png")}
            />
          </FadePressable>
          <FadePressable onPress={() => setShirt("Blue")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Blue_Shirt_Icon.png")}
            />
          </FadePressable>
          <FadePressable onPress={() => setShirt("Purple")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Purple_Shirt_Icon.png")}
            />
          </FadePressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
  },
  icon: {
    width: 100,
    height: 100,
  },
  avatar: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  save: {
    height: 20,
  },
});
