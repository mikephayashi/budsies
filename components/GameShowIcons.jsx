import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import FadePressable from "../components/FadePressable";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function GameShowIcons({ muted, toggleMute, setShowChat }) {
  const Images = useContext(ImagesContext);
  return (
    <View style={styles.iconRow}>
      <FadePressable
        onPress={() => {}}
        style={{ ...styles.fade, ...styles.left }}
      >
        <Image style={styles.icon} source={Images[getImage("subtitles")]} />
      </FadePressable>
      <FadePressable
        onPress={() => {
          toggleMute();
        }}
        style={{ ...styles.fade, ...styles.right }}
      >
        <Image
          style={styles.icon}
          source={Images[!muted ? getImage("mute") : getImage("unmute")]}
        />
      </FadePressable>
      <FadePressable
        onPress={() => setShowChat(true)}
        style={{ ...styles.fade, ...styles.right }}
      >
        <Image style={styles.icon} source={Images[getImage("chat")]} />
      </FadePressable>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    marginLeft: "auto",
  },
  right: {
    marginRight: 10,
  },
  icon: {
    width: "50%",
    height: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    resizeMode: "contain",
  },
  fade: {
    width: "7%",
    height: "100%",
  },
  iconRow: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
    bottom: 20,
  },
});
