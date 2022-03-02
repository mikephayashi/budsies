import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import CommentBubble from "./CommentBubble";
import { uploadComment } from "../FirebaseCalls";

export default function ChatPane({ room, userState, comments, setShowShat }) {
  const [comment, onChangeComment] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {comments.map((comment) => (
          <CommentBubble comment={comment} />
        ))}
      </ScrollView>
      <View style={styles.newComment}>
        <TextInput
          placeholder="Comment"
          onChangeText={onChangeComment}
          value={comment}
        />
        <Button
          title="Submit"
          onPress={() =>
            uploadComment(room.id, comment, onChangeComment, userState.name)
          }
        />
        <Button 
            title="Close"
            onPress={() => setShowShat(false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "100%",
    marginLeft: "auto",
    backgroundColor: "red",
    display: "flex",
  },
  newComment: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
});
