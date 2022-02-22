import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Text } from "react-native";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";
import DropDownPicker from "react-native-dropdown-picker";

export default function CreateRoomScreen({ item, navigation }) {
  const [name, onChangeName] = useState("");
  const [numBuds, onChangeNumBuds] = useState("");
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "TV", value: "tv" },
    { label: "Games", value: "games" },
    { label: "Sports", value: "sports" },
    { label: "Music", value: "music" },
  ]);

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
        onChangeText={onChangeNumBuds}
        keyboardType="numeric"
        value={numBuds}
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
          const id = uuid.v4();
            await setDoc(doc(db, "rooms", id), 
            {
                id: id,
                name: name,
                numBuds: numBuds,
                interests: interests,
                players: [],
            }
            );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "red",
    paddingTop: 50,
  },
});
