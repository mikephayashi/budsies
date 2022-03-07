import { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FadePressable from "../components/FadePressable";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function RoomButton({ navigation, room, userState }) {
  const Images = useContext(ImagesContext);
  return (
    <View style={[styles.block1, styles.row]}>
      <Image style={styles.image} source={Images[getImage("join_room_icon")]} />
      <Text style={styles.highlights}>{room.name}</Text>
      <Text style={styles.highlights}>
        {room.numBuds}/{room.maxBuds} Buds
      </Text>
      <FadePressable
        onPress={async () => {
          if (room.numBuds < room.maxBuds) {
            navigation.navigate("NameScreen", {
              room: room,
              fromVideoScreen: false,
            });
          }
        }}
        style={styles.fade}
      >
        <View style={[styles.block2, styles.block2_layout]}>
          <Text style={styles.small_text_body} ellipsizeMode={"clip"}>
            {"Join Room"}
          </Text>
        </View>
      </FadePressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: 80,
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    marginTop: "1%",
  },
  image: {
    width: "20%",
    height: "80%",
    resizeMode: "contain",
    padding: "auto",
    flex: 1,
  },
  block1: {
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
    flex: 1,
  },
  block2: {
    backgroundColor: "#e2c3aeff",
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#ffffffff",
    borderWidth: 2,
    elevation: 1,
    shadowColor: "#000000",
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    flex: 1,
  },
  block2_layout: {
    width: "100%",
    right: 10,
  },
  small_text_body: {
    color: "#ffffffff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 40,
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular" /* Balsamiq Sans */,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: "auto",
    marginBottom: "auto",
  },
  fade: {
    width: "20%",
    height: "70%",
  },
});
