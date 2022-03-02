import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function CommentAvatarIcon({ avatarImg }) {
  return (
    <View style={styles.clip}>
      <Image style={styles.avatarIcon} source={avatarImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  clip: {
    borderRadius: 50,
    overflow: "hidden",
    width: 70,
    height: 70,
    marginLeft: "2%",
    backgroundColor: "#2C3948ff",
  },
  avatarIcon: {
    width: "100%",
    height: "300%",
    resizeMode: "contain",
  },
});
