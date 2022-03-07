import React, { useState, useEffect, useContext } from "react";
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
import { avatarImages, avatarGifs } from "../shared/avatarImages";
import IconButton from "../components/IconButton";
import BackgroundView from "../components/BackgroundView";
import VideoRectangle from "../components/VideoRectangle";
import ChatPane from "../components/ChatPane";
import CustomModal from "../components/CustomModal";
import FadePressable from "../components/FadePressable";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function VideoRoomScreen({ navigation, route }) {
  // const room = { id: "0c136655-43ae-40c0-bc7f-d754294a0eee" };
  // const docId = "cjr0N8PmWRFwuzlkl7kk";
  // const userState = {
  //   name: "Mike",
  //   avatarUri: "Jasper_Hat-Grey_Shirt-Blue_Skin-Golden_Glasses-Brown",
  // };
  const room = route.params.room;
  const docId = route.params.docId;
  const { userState, usersDispatch } = useCustomContext();

  const Images = useContext(ImagesContext);

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
            source={Images[getImage('clipboard')]}
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
              let img = Images[getImage(item.avatarUri)];
              if (item.isTalking) {
                img = Images[getImage(item.avatarUri + 'gif')];
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
              ? Images[getImage('unmute')]
              : Images[getImage('mute')]
          }
          onPress={async () => {
            await updateIsTalking(muted, room.id, docId);
            setMuted(!muted);
          }}
        />
        <IconButton
          label={"Chat"}
          image={Images[getImage('chat')]}
          onPress={() => setShowChat(!showChat)}
        />
        <IconButton
          label={"Avatar"}
          image={Images[getImage('avatarSelector')]}
          onPress={() =>
            navigation.navigate("AvatarScreen", { fromScreen: "VideoScreen", room: room, docId: docId })
          }
        />
        <IconButton
          label={"Play"}
          image={Images[getImage('play')]}
          onPress={() => navigation.navigate("GameShowScreen", { room: room })}
        />
        <IconButton
          label={"Code"}
          image={Images[getImage('copyCode')]}
          onPress={() => setModalVisible(true)}
        />
        <IconButton
          label={"Exit"}
          image={Images[getImage('exit')]}
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
