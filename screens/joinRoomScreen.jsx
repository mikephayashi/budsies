import React, { useState, useRef } from "react";
import {
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { filterRooms } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import { roomTypes } from "../shared/rooms";
import BackgroundView from "../components/BackgroundView";
import RoomButton from "../components/RoomButton";

export default function JoinRoomScreen({ navigation }) {
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(roomTypes);
  const [rooms, setRooms] = useState([]);
  const { userState, usersDispatch } = useCustomContext();

  return (
    <Pressable style={styles.pressable}onPress={() => setOpen(false)}>
      <BackgroundView navigation={navigation}>
        <DropDownPicker
          style={styles.dropDown}
          value={interests}
          setValue={setInterests}
          open={open}
          setOpen={setOpen}
          items={items}
          setItems={setItems}
          multiple={true}
          renderBadgeItem={({ label }) => <Text>{label}</Text>}
          controller={(instance) => (dropDownRef.current = instance)}
        />
        <Button
          style={"margin-top: 50px;"}
          title="Search Rooms"
          onPress={() => filterRooms(interests, (docs) => setRooms(docs))}
        />
        <ScrollView>
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
  dropDown: {
    width: "20%",
  },
  pressable: {
    flex: 1,
  }
});
