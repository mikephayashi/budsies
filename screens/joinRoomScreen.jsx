import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Pressable } from "react-native";
import { filterRooms } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import BackgroundView from "../components/BackgroundView";
import RoomButton from "../components/RoomButton";
import WhiteInterestsJoin from "../components/WhiteInterestsJoin";

export default function JoinRoomScreen({ navigation }) {
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const { userState, usersDispatch } = useCustomContext();

  return (
    <Pressable style={styles.pressable} onPress={() => setOpen(false)}>
      <BackgroundView navigation={navigation}>
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
  scroll: {
    // backgroundColor: "red",
  }
});
