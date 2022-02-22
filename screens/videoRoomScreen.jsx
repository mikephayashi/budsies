import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, ScrollView } from "react-native";
import { db } from "../firebase";
import { doc, setDoc, updateDoc, arrayRemove, onSnapshot } from "firebase/firestore";
import uuid from "react-native-uuid";

export default function VideoRoomScreen({ navigation, route }) {
  const room = route.params.room;
  const [comment, onChangeComment] = useState("");
  const [comments, updateComments] = useState([]);
  const unsub = onSnapshot(doc(db, "rooms", room.id, "comments"), (doc) => {
    updateComments([doc.data(), ...comments]);
  });
  return (
    <View style={styles.container}>
      <Button
        style={"margin-top: 50px;"}
        title="Back"
        onPress={() => navigation.pop()}
      />
      <Button
        style={"margin-top: 50px;"}
        title="Exit"
        onPress={async () => {
          await updateDoc(doc(db, "rooms", room.id), {
            players: arrayRemove("Me"),
          });
          navigation.popToTop();
        }}
      />
      <TextInput
        placeholder="Comment"
        onChangeText={onChangeComment}
        value={comment}
      />
      <Button
        title="Submit"
        onPress={async () => {
          const commentId = uuid.v4();
          await setDoc(doc(db, "rooms", room.id, "comments", commentId), {
            id: commentId,
            comment: comment,
          });
          onChangeComment("");
        }}
      />
      <ScrollView>
        {comments.map((comment) => {
          return <Text key={comment.id}>
            {comment.comment}
          </Text>
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "red",
    paddingTop: 50,
  },
});
