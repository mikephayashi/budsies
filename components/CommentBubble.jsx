import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import CommentAvatarIcon from "./CommentAvatarIcon";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function CommentBubble({ comment, isMe }) {
  const Images = useContext(ImagesContext);
  return (
    <View style={isMe ? { ...styles.row, ...styles.me } : styles.row}>
      {isMe ? null : (
        <CommentAvatarIcon avatarImg={Images[getImage(comment.avatarUri)]} />
      )}
      <View style={styles.bubble}>
        <Text style={styles.text}>{comment.comment}</Text>
      </View>
      {isMe ? (
        <CommentAvatarIcon avatarImg={Images[getImage(comment.avatarUri)]} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  me: { alignSelf: "flex-end", marginRight: 10 },
  row: {
    flexDirection: "row",
    flex: 1,
    marginTop: "2%",
    // width: "100%",
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
    height: "70%",
  },
  text: {
    padding: 15,
    color: "black",
    flex: 1,
    fontSize: 20,
    marginTop: "auto",
    marginBottom: "auto",
  },
  name: {
    color: "white",
  },
});
