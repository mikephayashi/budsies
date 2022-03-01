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
import { jasperImages } from "../shared/avatarImages";
import IconButton from "../components/IconButton";
import BackgroundView from "../components/BackgroundView";
import VideoRectangle from "../components/VideoRectangle";

export default function VideoRoomScreen({ navigation, route }) {
  const room = route.params.room;
  const docId = route.params.docId;

  const { userState, usersDispatch } = useCustomContext();
  const [comment, onChangeComment] = useState("");
  const [comments, updateComments] = useState([]);
  const [players, setPlayers] = useState([]);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const unsubscribePlayers = addPlayersListener(room.id, (newPlayers) => {
      setPlayers(newPlayers);
    });
    const unsubscribeCommments = addCommentsListener(room.id, (newComments) =>
      updateComments(newComments)
    );
    return function cleanup() {
      unsubscribePlayers();
      unsubscribeCommments();
    };
  }, []);

  return (
    <BackgroundView showBack={false}>
      <View style={styles.container}>
        <VideoRectangle avatarImg={jasperImages[userState.avatarUri]} />
        <ScrollView style={styles.scroll}>
          {players.map((player) => {
            if (player.name === userState.name) {
              return;
            }
            return (
              <VideoRectangle
                key={player.id}
                avatarImg={jasperImages[player.avatarUri]}
              />
            );
          })}
        </ScrollView>
        <View style={styles.row}>
          <IconButton
            label={"Microphone"}
            image={
              muted
                ? require("../assets/video_icons/unmute.png")
                : require("../assets/video_icons/mute.png")
            }
            onPress={() => setMuted(!muted)}
          />
          <IconButton
            label={"Chat"}
            image={require("../assets/video_icons/chat.png")}
          />
          <IconButton
            label={"Avatar"}
            image={require("../assets/video_icons/avatarSelector.png")}
          />
          <IconButton
            label={"Play"}
            image={require("../assets/video_icons/play.png")}
            onPress={() =>
              navigation.navigate("GameShowScreen", { room: room })
            }
          />
          <IconButton
            label={"Code"}
            image={require("../assets/video_icons/copyCode.png")}
          />
          <IconButton
            label={"Exit"}
            image={require("../assets/video_icons/exit.png")}
            onPress={() => removePlayer(false, room.id, navigation, docId)}
          />
        </View>
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 50,
  },
  scroll: {
    height: "30%",
  },
  avatarImg: { width: 100, height: 100 },
  row: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    backgroundColor: "#292929ff",
    position: "absolute",
    bottom: 0,
  },
});
