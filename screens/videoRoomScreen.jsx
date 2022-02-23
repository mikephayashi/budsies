import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {
  uploadComment,
  removePlayer,
  addCommentsListener,
} from "../FirebaseCalls";


export default function VideoRoomScreen({ navigation, route }) {
  const room = route.params.room;
  const [comment, onChangeComment] = useState("");
  const [comments, updateComments] = useState([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = addCommentsListener(room.id, (newComments)=>updateComments([...comments, ...newComments]));
    return function cleanup() {
      unsubscribe();
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
            <div>
              <Text key={comment.id}>
                {comment.name}: {comment.comment}
              </Text>
            </div>
          );
        })}
      </ScrollView>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"fYup-t_2yGc"}
        // onChangeState={onStateChange} 
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
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
