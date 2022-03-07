import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { filterRooms } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import BackgroundView from "../components/BackgroundView";
import RoomButton from "../components/RoomButton";
import WhiteInterestsJoin from "../components/WhiteInterestsJoin";
import ScreenHeader from "../components/ScreenHeader";

export default function JoinRoomScreen({ navigation }) {
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const { userState, usersDispatch } = useCustomContext();

  return (
    <Pressable style={styles.pressable} onPress={() => setOpen(false)}>
      <BackgroundView navigation={navigation}>
        <ScreenHeader title="Join a Room" />
        <WhiteInterestsJoin
          interests={interests}
          setInterests={setInterests}
          open={open}
          setOpen={setOpen}
          onPress={() => {
            setOpen(false);
            filterRooms(interests, (docs) => setRooms(docs));
          }}
        />
        {rooms.length > 0 ? (
          <View style={styles.headerRow}>
            <Text style={{ ...styles.room, ...styles.header }}>ROOM NAME</Text>
            <Text style={{ ...styles.capacity, ...styles.header }}>
              CAPACITY
            </Text>
          </View>
        ) : null}

        <ScrollView style={styles.scroll}>
          {rooms.map((room) => {
            return (
              <RoomButton
                key={room.id}
                navigation={navigation}
                room={room}
                userState={userState}
              />
            );
          })}
        </ScrollView>
      </BackgroundView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  headerRow: {
    marginTop: "3%",
    flexDirection: "row",
  },
  header: {
    color: "white",
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 20,
  },
  room: {
    marginLeft: "35%",
  },
  capacity: {
    marginLeft: "5%",
  },
});
