import React, {useContext} from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackgroundView from "../components/BackgroundView";
import ScrollFrame from "../components/ScrollFrame";
import { games, shows } from "../shared/gameShows";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function GameShowScreen({ navigation, route }) {
    const room = route.params.room;
    const userId = route.params.userId;
  // const room = {
  //   id: "0c136655-43ae-40c0-bc7f-d754294a0eee",
  //   interests: ["tv", "games"],
  //   name: "Roomime",
  // };
  const Images = useContext(ImagesContext);
  return (
    <BackgroundView navigation={navigation}>
      <View style={styles.column}>
        <Text style={styles.hero_title} ellipsizeMode={"clip"}>
          Shows
        </Text>
        <ScrollView horizontal={true}>
          {shows.map((show) => {
            return (
              <ScrollFrame
                key={show.videoId}
                navigation={navigation}
                room={room}
                thumbnail={Images[getImage(show.thumbnail)]}
                onPress={() =>
                  navigation.navigate("ShowScreen", {
                    room: room,
                    videoId: show.videoId,
                    userId: userId,
                  })
                }
              />
            );
          })}
        </ScrollView>
        <Text style={styles.hero_title} ellipsizeMode={"clip"}>
          Games
        </Text>
        <ScrollView horizontal={true}>
          {games.map((game) => {
            return (
              <ScrollFrame
                key={game.uri}
                navigation={navigation}
                room={room}
                thumbnail={Images[getImage(game.thumbnail)]}
                onPress={() =>
                  navigation.navigate("GameScreen", { room: room, userId: userId, uri: game.uri })
                }
              />
            );
          })}
        </ScrollView>
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
  },
  hero_title: {
    color: "#ffffffff",
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 48,
    fontSize: 40,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginLeft: 10,
  },
});
