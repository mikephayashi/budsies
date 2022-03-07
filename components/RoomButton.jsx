import { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FadePressable from "../components/FadePressable";
import { navigateToVideoRoom } from "../FirebaseCalls";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function RoomButton({ navigation, room, userState }) {
  const Images = useContext(ImagesContext);
  return (
    <FadePressable
      onPress={async () => {
        if (room.numBuds < room.maxBuds) {
          navigateToVideoRoom(
            room,
            navigation,
            userState.name,
            userState.avatarUri
          );
        }
      }}
    >
      <View style={[styles.block1, styles.row]}>
        <Image
          style={styles.image}
          source={Images[getImage("join_room_icon")]}
        />
        <Text style={styles.highlights}>{room.name}</Text>
        <Text style={styles.highlights}>
          {room.numBuds}/{room.maxBuds} Buds
        </Text>
        <Text style={styles.highlights}>{room.interests.toString()}</Text>
      </View>
    </FadePressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: "100%",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "1%",
  },
  image: {
    width: "20%",
    height: "100%",
    resizeMode: "contain",
    padding: "auto",
  },
  block1: {
    width: "100%",
    height: "20%",
    backgroundColor: "#ffffffff",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#00000019",
    borderWidth: 1,
    elevation: 1,
    shadowColor: "#000000",
    shadowRadius: 1.810810810810811,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  highlights: {
    color: "#000000ff",
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
