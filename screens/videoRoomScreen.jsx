import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import {
  removePlayer,
  addCommentsListener,
  addPlayersListener,
} from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import { jasperImages } from "../shared/avatarImages";
import IconButton from "../components/IconButton";
import BackgroundView from "../components/BackgroundView";
import VideoRectangle from "../components/VideoRectangle";
import ChatPane from "../components/ChatPane";

export default function VideoRoomScreen({ navigation, route }) {
  // const room = route.params.room;
  // const docId = route.params.docId;
  const room = { id: "0c136655-43ae-40c0-bc7f-d754294a0eee" };
  const docId = "";

  // const { userState, usersDispatch } = useCustomContext();

  const userState = {
    name: "Mike",
    avatarUri: "Jasper_Hat-Grey_Shirt-Blue_Skin-Golden_Glasses-Brown",
  };

  const [comments, updateComments] = useState([]);
  const [players, setPlayers] = useState([]);
  const [muted, setMuted] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [itemDimension, setItemDimension] = useState(400);

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

  const people = [
    { name: "Mike", avatarUri: userState.avatarUri },
    { name: "Mike", avatarUri: userState.avatarUri },
    { name: "Mike", avatarUri: userState.avatarUri },
    { name: "Mike", avatarUri: userState.avatarUri },
    { name: "Mike", avatarUri: userState.avatarUri },
    { name: "Mike", avatarUri: userState.avatarUri },
    { name: "Mike", avatarUri: userState.avatarUri },
    { name: "Mike", avatarUri: userState.avatarUri },
  ];

  return (
    <BackgroundView showBack={false}>
      <View style={styles.bigRow}>
        <View style={styles.container}>
          <FlatGrid
          style={styles.gridView}
            itemDimension={itemDimension}
            data={people}
            renderItem={({ item }) => {
              return (
                <VideoRectangle
                  name={item.name}
                  avatarImg={jasperImages[item.avatarUri]}
                />
              );
            }}
          />
        </View>
        {showChat ? (
          <ChatPane
            room={room}
            userState={userState}
            comments={comments}
            setShowChat={setShowChat}
          />
        ) : null}
      </View>
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
          onPress={() => setShowChat(!showChat)}
        />
        <IconButton
          label={"Avatar"}
          image={require("../assets/video_icons/avatarSelector.png")}
        />
        <IconButton
          label={"Play"}
          image={require("../assets/video_icons/play.png")}
          onPress={() => navigation.navigate("GameShowScreen", { room: room })}
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
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: "auto",
    marginBottom: "auto",
    height: "74%",
    marginTop: 0,
  },
  scroll: {
    height: "30%",
  },
  avatarImg: { width: 100, height: 100 },
  bigRow: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
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
  avatarRow: {
    flexDirection: "row",
    flex: 1,
  },
  avatarColumn: {
    flex: 1,
  },
  gridView: {
    top: 0,
  }
});
