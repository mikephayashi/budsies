import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import {
  removePlayer,
  addCommentsListener,
  addPlayersListener,
  updateIsTalking,
} from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import * as Clipboard from "expo-clipboard";
import { jasperImages, jasperGifs } from "../shared/avatarImages";
import IconButton from "../components/IconButton";
import BackgroundView from "../components/BackgroundView";
import VideoRectangle from "../components/VideoRectangle";
import ChatPane from "../components/ChatPane";
import CustomModal from "../components/CustomModal";
import FadePressable from "../components/FadePressable";

export default function VideoRoomScreen({ navigation, route }) {
  // const room = { id: "0c136655-43ae-40c0-bc7f-d754294a0eee" };
  // const docId = "cjr0N8PmWRFwuzlkl7kk";
  // const userState = {
  //   name: "Mike",
  //   avatarUri: "Jasper_Hat-Grey_Shirt-Blue_Skin-Golden_Glasses-Brown",
  // };
  const room = route.params.room;
  const docId = route.params.docId;
  const {userState, usersDispatch} = useCustomContext();

  const setMinSize = (numPeople) => {
    if (numPeople <= 4) {
      return 400;
    } else if (numPeople <= 8) {
      return 300;
    } else {
      return 200;
    }
  };

  const [comments, updateComments] = useState([]);
  const [players, setPlayers] = useState([]);
  const [muted, setMuted] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [itemDimension, setItemDimension] = useState(setMinSize(players));
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribePlayers = addPlayersListener(room.id, (newPlayers) => {
      setPlayers(newPlayers);
      setItemDimension(setMinSize(newPlayers.length));
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
    <BackgroundView showBack={false} showLogo={false}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <Text style={[styles.codeHeader, styles.code]}>Code</Text>
        <Text style={[styles.codeText, styles.code]}>{room.id}</Text>
        <FadePressable onPress={() => Clipboard.setString(room.id)}>
          <Image
            style={styles.clipboard}
            source={require("../assets/clipboard.png")}
          />
        </FadePressable>
      </CustomModal>
      <View style={styles.bigRow}>
        <View style={styles.container}>
          <FlatGrid
            style={styles.gridView}
            itemDimension={itemDimension}
            data={players}
            renderItem={({ item }) => {
              let img = jasperImages[item.avatarUri];
              if (item.isTalking) {
                img = jasperGifs[item.avatarUri];
              }
              return <VideoRectangle name={item.name} avatarImg={img} />;
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
          onPress={async () => {
            await updateIsTalking(muted, room.id, docId);
            setMuted(!muted);
            }}
        />
        <IconButton
          label={"Chat"}
          image={require("../assets/video_icons/chat.png")}
          onPress={() => setShowChat(!showChat)}
        />
        <IconButton
          label={"Avatar"}
          image={require("../assets/video_icons/avatarSelector.png")}
          onPress={() =>
            navigation.navigate("AvatarScreen", { fromScreen: "VideoScreen" })
          }
        />
        <IconButton
          label={"Play"}
          image={require("../assets/video_icons/play.png")}
          onPress={() => navigation.navigate("GameShowScreen", { room: room })}
        />
        <IconButton
          label={"Code"}
          image={require("../assets/video_icons/copyCode.png")}
          onPress={() => setModalVisible(true)}
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
    height: "85%",
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
    height: "15%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    backgroundColor: "#292929ff",
    position: "absolute",
    bottom: 0,
  },
  gridView: {
    top: 0,
  },
  code: {
    color: "white",
  },
  codeHeader: {
    fontSize: 40,
  },
  codeText: {
    fontSize: 20,
  },
  clipboard: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
});
