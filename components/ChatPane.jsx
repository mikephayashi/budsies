import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import CommentBubble from "./CommentBubble";
import { uploadComment } from "../FirebaseCalls";
import FadePressable from "./FadePressable";
import { ImagesContext, getImage } from "../state/ImagesContext.js";

export default function ChatPane({ room, userState, comments, setShowChat }) {
  const Images = useContext(ImagesContext);
  const [comment, onChangeComment] = useState("");
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView style={styles.scroll}>
        {comments
          .sort(function (x, y) {
            return x.timestamp - y.timestamp;
          })
          .map((comment) => (
            <CommentBubble key={comment.id} comment={comment} />
          ))}
      </ScrollView>
      <View style={styles.newComment}>
        <TextInput
          style={styles.commentInput}
          placeholder="Tap here to chat"
          onChangeText={onChangeComment}
          value={comment}
        />
        <FadePressable
          onPress={() =>
            comment !== "" &&
            uploadComment(
              room.id,
              comment,
              onChangeComment,
              userState.name,
              userState.avatarUri
            )
          }
        >
          <Image style={styles.expand} source={Images[getImage("send")]} />
        </FadePressable>
        <FadePressable onPress={() => setShowChat(false)}>
          <Image style={styles.expand} source={Images[getImage("expand")]} />
        </FadePressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "85%",
    marginLeft: "auto",
    backgroundColor: "#191919ff",
    display: "flex",
  },
  newComment: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
  },
  commentInput: {
    flex: 1,
    backgroundColor: "white",
    fontSize: 30,
  },
  scroll: {
    flex: 1,
  },
  expand: {
    resizeMode: "contain",
    width: 40,
    height: "100%",
    margin: "auto",
    marginRight: "2%",
  },
});
