import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {createRoom} from '../FirebaseCalls';
import {roomTypes} from '../shared/rooms';

export default function CreateRoomScreen({ item, navigation }) {
  const [name, onChangeName] = useState("");
  const [maxBuds, onChangeMaxBuds] = useState("");
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(roomTypes);

  return (
    <View style={styles.container}>
      <Button color="white" title="Back" onPress={() => navigation.pop()} />
      <TextInput
        placeholder="Room Name"
        onChangeText={onChangeName}
        value={name}
      />
      <TextInput
        placeholder="Max # of buds"
        onChangeText={onChangeMaxBuds}
        keyboardType="numeric"
        value={maxBuds}
      />
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
        color="white"
        title="Submit"
        onPress={async () => {
          await createRoom(name, maxBuds, interests);
        }}
      />
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
