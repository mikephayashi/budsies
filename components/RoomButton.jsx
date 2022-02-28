import { View, Text, StyleSheet, Image } from "react-native";
import FadePressable from "../components/FadePressable";
import { navigateToVideoRoom } from "../FirebaseCalls";

export default function RoomButton({ navigation, room, userState }) {
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
          source={require("../assets/join_room_icon.png")}
        />
        <View style={styles.rest}>
          <Text style={styles.highlights}>{room.name}</Text>
          <Text style={styles.highlights}>
            {room.numBuds}/{room.maxBuds}
          </Text>
          <Text style={styles.highlights}>{room.interests.toString()}</Text>
        </View>
      </View>
    </FadePressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: "100%",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  rest: {
    flex: 9,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    flex: 1,
  },
  block1: {
    width: "100%",
    flexGrow: 1,
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
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Fira Sans */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
});
