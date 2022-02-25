import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  Image,
} from "react-native";
import {
  uploadComment,
  removePlayer,
  addCommentsListener,
} from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import getAvatar from '../shared/avatars';

export default function VideoRoomScreen({ navigation, route }) {
  const room = route.params.room;

  const { userState, usersDispatch } = useCustomContext();
  const [comment, onChangeComment] = useState("");
  const [comments, updateComments] = useState([]);

  useEffect(() => {
    console.log(userState);
    const unsubscribeCommments = addCommentsListener(room.id, (newComments) =>
      updateComments([...comments, ...newComments])
    );
    return function cleanup() {
      unsubscribeCommments();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        style={"margin-top: 50px;"}
        title="Back"
        onPress={() => removePlayer(true, room.id, navigation)}
      />
      <Button
        style={"margin-top: 50px;"}
        title="Exit"
        onPress={() => removePlayer(false, room.id, navigation)}
      />
      <Button
        title="Youtube"
        onPress={() => navigation.navigate("ShowScreen", { room: room })}
      />
      <Button
        title="Game"
        onPress={() => navigation.navigate("GameScreen")}
      />
      {/* <Image source={getAvatar(userState.avatarIndex)} style={{ width: 100, height: 100 }} /> */}
      <Image source={getAvatar(userState.avatarIndex)} style={{ width: 100, height: 100 }} />
      <TextInput
        placeholder="Comment"
        onChangeText={onChangeComment}
        value={comment}
      />
      <Button
        title="Submit"
        onPress={() => uploadComment(room.id, comment, onChangeComment)}
      />
      <ScrollView>
        {comments.map((comment) => {
          return (
            <Text key={comment.id}>
              {comment.name}: {comment.comment}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 50,
  },
});
