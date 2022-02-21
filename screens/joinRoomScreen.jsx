import React, { useState } from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import { db } from "../firebase";
import { getDocs, query, where, collection } from "firebase/firestore";
import DropDownPicker from "react-native-dropdown-picker";

export default function JoinRoomScreen({ item, navigation }) {
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "TV", value: "tv" },
    { label: "Games", value: "games" },
    { label: "Sports", value: "sports" },
    { label: "Music", value: "music" },
  ]);
  const [rooms, setRooms] = useState([]);

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
        onPress={async () => {
          let roomsRef = collection(db, "rooms");
          const q = query(
            roomsRef,
            where("interests", "array-contains-any", interests)
          );
          const querySnapshot = await getDocs(q);
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push(doc.data());
          });
          console.log(docs);
          setRooms(docs);
        }}
      />
      <ScrollView>
        {rooms.map((room) => {
          return (
            <View>
              <Text>Test</Text>
              <Text>{room.name}</Text>
              <Text>{room.numBuds}</Text>
              <Text>{room.interests.toString()}</Text>
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
    backgroundColor: "red",
    paddingTop: 50,
  },
});
