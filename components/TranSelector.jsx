import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import FadePressable from "./FadePressable";
import { jasperImages } from "../shared/avatarImages";

export default function TranSelector({setSkin, setShirt, glasses, setGlasses, getAvatarUri}) {

  const handleGlasses = () => {
    if (glasses === "None") {
      setGlasses("Brown");
    } else if (glasses === "Brown") {
      setGlasses("None");
    }
  };

  return (
    <View style={styles.bigRow}>
      <Image style={styles.avatar} source={jasperImages[getAvatarUri()]} />
      <View style={styles.column}>
        <View style={styles.row}>
          <FadePressable onPress={() => handleGlasses()}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Brown_Glasses_Icon.png")}
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
          <FadePressable onPress={() => setShirt("Blue")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Blue_Sweater_Icon.png")}
            />
          </FadePressable>
          <FadePressable onPress={() => setShirt("Grey")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Grey_Sweater_Icon.png")}
            />
          </FadePressable>
          <FadePressable onPress={() => setShirt("Pink")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Pink_Sweater_Icon.png")}
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
