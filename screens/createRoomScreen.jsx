import React, { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { createRoom } from "../FirebaseCalls";
import { roomTypes } from "../shared/rooms";
import BackgroundView from "../components/BackgroundView";
import Header from "../components/Header";
import WhiteInput from "../components/WhiteInput";

export default function CreateRoomScreen({ item, navigation }) {
  const [name, onChangeName] = useState("");
  const [maxBuds, onChangeMaxBuds] = useState("");
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(roomTypes);

  return (
    <BackgroundView navigation={navigation}>
      <Header title="Create a Room" />
      <WhiteInput
        label="Room Name"
        placeholder="Enter Name"
        onChangeText={onChangeName}
        value={name}
      />
      <WhiteInput
        label="Max # of buds"
        placeholder="Max # of buds"
        onChangeText={onChangeMaxBuds}
        value={maxBuds}
      />
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
      />
      <Button
        color="white"
        title="Submit"
        onPress={async () => {
          await createRoom(name, maxBuds, interests);
        }}
      />
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  dropDown: {
    width: "20%",
  }
});