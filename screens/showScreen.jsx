import {
  View,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import {
  addYoutubeListener,
  togglePlay,
} from "../FirebaseCalls";
import { useCustomContext } from '../state/CustomContext';
import BackButton from "../components/BackButton";

export default function ShowScreen({navigation, route}){
    const room = route.params.room;
    const videoId = route.params.videoId;
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef();
    const setByOutside = useRef(false);
    const { userState, usersDispatch } = useCustomContext();

    useEffect(() => {
        const unsubscribeYoutube = addYoutubeListener(
            room.id,
            (isPlaying) => setPlaying(isPlaying),
            (isOutside) => {setByOutside.current = isOutside}, 
            (currentTime) => playerRef.current?.seekTo(currentTime),
            userState,
          );
          return function cleanup(){
            unsubscribeYoutube();
          }
    }, []);

    const ytTogglePlay = (isPlaying) => {
        playerRef.current
          ?.getCurrentTime()
          .then((currentTime) => {
            togglePlay(isPlaying, currentTime, room, userState);
          });
      };
    return(
        <View>
            <YoutubePlayer
                ref={playerRef}
                height={700}
                play={playing}
                // videoId={"fYup-t_2yGc"}
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
            <BackButton navigation={navigation}/>
        </View>
    );
}