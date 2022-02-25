import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  WebView,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {
  uploadComment,
  removePlayer,
  addCommentsListener,
  addYoutubeListener,
  togglePlay,
} from "../FirebaseCalls";
import { useCustomContext }from '../state/CustomContext'

export default function VideoRoomScreen({ navigation, route }) {
  const room = route.params.room;

  const [comment, onChangeComment] = useState("");
  const [comments, updateComments] = useState([]);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();
  const setByOutside = useRef(false);
  const { userState, usersDispatch } = useCustomContext();

  useEffect(() => {
    const unsubscribeCommments = addCommentsListener(room.id, (newComments) =>
      updateComments([...comments, ...newComments])
    );
    const unsubscribeYoutube = addYoutubeListener(
      room.id,
      (isPlaying) => setPlaying(isPlaying),
      (isOutside) => {setByOutside.current = isOutside}, 
      (currentTime) => playerRef.current?.seekTo(currentTime),
      userState,
    );
    return function cleanup() {
      unsubscribeCommments();
      unsubscribeYoutube();
    };
  }, []);

  const ytTogglePlay = (isPlaying) => {
    playerRef.current
      ?.getCurrentTime()
      .then((currentTime) => {
        togglePlay(isPlaying, currentTime, room, userState);
      });
  }

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
      <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
      />
      {/* <YoutubePlayer
        ref={playerRef}
        height={300}
        play={playing}
        videoId={"fYup-t_2yGc"}
        onChangeState={(state) => {
          if (!setByOutside.current) {
            if (state === "playing") {
              ytTogglePlay(true);
            } else if (state === "paused") {
              ytTogglePlay(false);
            }
          }
        }}
      /> */}
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
