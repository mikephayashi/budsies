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
  addPlayersListener,
} from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import getAvatar from '../shared/avatars';

export default function VideoRoomScreen({ navigation, route }) {
  const room = route.params.room;
  const docId = route.params.docId;

  const { userState, usersDispatch } = useCustomContext();
  const [comment, onChangeComment] = useState("");
  const [comments, updateComments] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const unsubscribePlayers = addPlayersListener(room.id, (newPlayers) => {
      setPlayers(newPlayers);
    });
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
        title="Exit"
        onPress={() => removePlayer(false, room.id, navigation, docId)}
      />
      <Button
        title="Youtube"
        onPress={() => navigation.navigate("ShowScreen", { room: room })}
      />
      <Button
        title="Game"
        onPress={() => navigation.navigate("GameScreen")}
      />
      <Image source={getAvatar(userState.avatarIndex)} style={{ width: 100, height: 100 }} />
      <ScrollView>
        {players.map((player) => {
          return (
            <Text key={player.name}>
              {player.name}: {player.avatarIndex}
            </Text>
          );
        })}
      </ScrollView>
      <TextInput
        placeholder="Comment"
        onChangeText={onChangeComment}
        value={comment}
      />
      <Button
        title="Submit"
        onPress={() => uploadComment(room.id, comment, onChangeComment, userState.name)}
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
