import React, { useState } from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { navigateToVideoRoom, filterRooms } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import {roomTypes} from '../shared/rooms';

export default function JoinRoomScreen({ navigation }) {
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(roomTypes);
  const [rooms, setRooms] = useState([]);
  const { userState, usersDispatch } = useCustomContext();

  return (
    <View style={styles.container}>
      <Button color="white" title="Back" onPress={() => navigation.pop()} />
      <DropDownPicker
        value={interests}
        setValue={setInterests}
        open={open}
        setOpen={setOpen}
        items={items}
        setItems={setItems}
        multiple={true}
        renderBadgeItem={({ label }) => <Text>{label}</Text>}
      />
      <Button
        style={"margin-top: 50px;"}
        title="Search Rooms"
        onPress={() => filterRooms(interests, (docs) => setRooms(docs))}
      />
      <ScrollView>
        {rooms.map((room) => {
          return (
            <View key={room.id}>
              <Text>{room.name}</Text>
              <Text>
                {room.numBuds}/{room.maxBuds}
              </Text>
              <Text>{room.interests.toString()}</Text>
              <Button
                title="Join Room"
                onPress={async () => {
                  if (room.numBuds < room.maxBuds) {
                    navigateToVideoRoom(room, navigation, userState.name, userState.avatarIndex);
                  }
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 50,
  },
});
