import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useState, useEffect, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import {
  addYoutubeListener,
  togglePlay,
  updateIsTalking,
  addCommentsListener,
} from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import BackButton from "../components/BackButton";
import GameShowIcons from "../components/GameShowIcons";
import { ImagesContext, getImage } from "../state/ImagesContext";
import ChatPane from "../components/ChatPane";

export default function ShowScreen({ navigation, route }) {
  const room = route.params.room;
  const videoId = route.params.videoId;
  const userId = route.params.userId;

  // const room = { id: "0c136655-43ae-40c0-bc7f-d754294a0eee" };
  // const videoId = "lNaWcPsMSiU";
  // const muted = false;

  const [playing, setPlaying] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const playerRef = useRef();
  const setByOutside = useRef(false);
  const { userState, usersDispatch } = useCustomContext();
  const Images = useContext(ImagesContext);
  const [comments, updateComments] = useState([]);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const unsubscribeYoutube = addYoutubeListener(
      room.id,
      (isPlaying) => setPlaying(isPlaying),
      (isOutside) => {
        setByOutside.current = isOutside;
      },
      (currentTime) => playerRef.current?.seekTo(currentTime),
      userState
    );
    return function cleanup() {
      unsubscribeYoutube();
    };
  }, []);

  const ytTogglePlay = (isPlaying) => {
    playerRef.current?.getCurrentTime().then((currentTime) => {
      togglePlay(isPlaying, currentTime, room, userState.name);
    });
  };

  const toggleMute = () => {
    updateIsTalking(muted, room.id, userId);
    setMuted(!muted);
  };

  useEffect(() => {
    const unsubscribeCommments = addCommentsListener(room.id, (newComments) =>
      updateComments(newComments)
    );
    return function cleanup() {
      unsubscribeCommments();
    };
  }, []);

  return (
    <View style={styles.back}>
      <View style={styles.bigRow}>
        <View style={styles.bigCol}>
          <BackButton navigation={navigation} />
          <View
            style={showChat ? { ...styles.yt, ...styles.smallYt } : styles.yt}
          >
            <YoutubePlayer
              ref={playerRef}
              height={1200}
              play={playing}
              videoId={videoId}
              onChangeState={(state) => {
                if (!setByOutside.current) {
                  if (state === "playing") {
                    ytTogglePlay(true);
                  } else if (state === "paused") {
                    ytTogglePlay(false);
                  }
                }
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
    marginTop: 15,
    height: "90%",
  },
  smallYt: {
    width: "50%",
    top: 160,
  },
});
