import { View, StyleSheet } from "react-native";
import { useState, useEffect, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { addYoutubeListener, togglePlay } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import BackButton from "../components/BackButton";

export default function ShowScreen({ navigation, route }) {
  // const room = route.params.room;
  // const videoId = route.params.videoId;

  const room = { id: "0c136655-43ae-40c0-bc7f-d754294a0eee" };
  const videoId = "lNaWcPsMSiU";

  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();
  const setByOutside = useRef(false);
  const { userState, usersDispatch } = useCustomContext();

  // useEffect(() => {
  //     const unsubscribeYoutube = addYoutubeListener(
  //         room.id,
  //         (isPlaying) => setPlaying(isPlaying),
  //         (isOutside) => {setByOutside.current = isOutside},
  //         (currentTime) => playerRef.current?.seekTo(currentTime),
  //         userState,
  //       );
  //       return function cleanup(){
  //         unsubscribeYoutube();
  //       }
  // }, []);

  const ytTogglePlay = (isPlaying) => {
    playerRef.current?.getCurrentTime().then((currentTime) => {
      togglePlay(isPlaying, currentTime, room, userState);
    });
  };
  return (
    <View style={styles.back}>
      <BackButton navigation={navigation} />
      <View style={styles.yt}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#272727",
    height: "100%",
  },
  yt: {
    marginTop: "auto",
    marginBottom: "auto",
    paddingTop: 50,
    height: "90%"
  },
});
