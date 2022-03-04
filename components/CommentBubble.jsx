import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CommentAvatarIcon from "./CommentAvatarIcon";
import { avatarImages } from "../shared/avatarImages";

export default function CommentBubble({ comment }) {
  return (
    <View style={styles.row}>
      <CommentAvatarIcon avatarImg={avatarImages[comment.avatarUri]} />
      <View style={styles.bubble}>
        <Text style={styles.text}>{comment.comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    marginTop: "2%",
  },
  bubble: {
    backgroundColor: "#ECEDF7ff",
    borderRadius: 15,
    minWidth: "5%",
    maxWidth: "80%",
    marginLeft: 10,
    marginTop: "auto",
    marginBottom: "auto",
    alignSelf: "flex-start",
  },
  text: {
    padding: 15,
    color: "green",
    flex: 1,
    fontSize: 30,
    marginTop: "auto",
    marginBottom: "auto",
  },
  name: {
    color: "white",
  },
});
