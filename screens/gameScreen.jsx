import WebView from "react-native-webview";
import BackButton from "../components/BackButton";
import { View, StyleSheet } from "react-native";
import { useState, useEffect, useRef } from "react";
import GameShowIcons from "../components/GameShowIcons";
import ChatPane from "../components/ChatPane";
import { updateIsTalking, addCommentsListener } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";

export default function GameScreen({ navigation, route }) {
  const uri = route.params.uri;
  const userId = route.params.userId;
  const room = route.params.room;
  // const uri = "https://www.coolmathgames.com/0-four-in-a-row#immersiveModal";
  const [showChat, setShowChat] = useState(false);
  const [comments, updateComments] = useState([]);
  const [muted, setMuted] = useState(false);
  const { userState, usersDispatch } = useCustomContext();

  useEffect(() => {
    const unsubscribeCommments = addCommentsListener(room.id, (newComments) =>
      updateComments(newComments)
    );
    return function cleanup() {
      unsubscribeCommments();
    };
  }, []);

  const toggleMute = () => {
    updateIsTalking(muted, room.id, userId);
    setMuted(!muted);
  };
  return (
    <View style={styles.back}>
      <View style={styles.bigRow}>
        <View style={styles.bigCol}>
          <BackButton navigation={navigation} />
          <View
            style={showChat ? { ...styles.yt, ...styles.smallYt } : styles.yt}
          >
            <WebView
              source={{
                uri: uri,
              }}
            />
          </View>

          <GameShowIcons
            muted={muted}
            toggleMute={toggleMute}
            setShowChat={setShowChat}
          />
        </View>
        {showChat ? (
          <ChatPane
            room={room}
            userState={userState}
            comments={comments}
            setShowChat={setShowChat}
            muted={muted}
            toggleMute={toggleMute}
            fullHeight={styles.fullHeight}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullHeight: {
    height: "100%",
  },
  bigRow: {
    flexDirection: "row",
    // backgroundColor: "red",
    height: "100%",
  },
  bigCol: {
    flexDirection: "column",
  },
  back: {
    backgroundColor: "#272727",
    height: "100%",
  },
  yt: {
    marginTop: "auto",
    marginBottom: "auto",
    height: "80%",
    backgroundColor: "red",
  },
  smallYt: {
    width: "50%",
    top: 10,
  },
});
