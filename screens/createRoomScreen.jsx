import React, { useState } from "react";
import { Button, StyleSheet, Pressable } from "react-native";
import { useCustomContext } from "../state/CustomContext";
import NextButton from "../components/NextButton";
import { createRoom } from "../FirebaseCalls";
import BackgroundView from "../components/BackgroundView";
import ScreenHeader from "../components/ScreenHeader";
import WhiteInput from "../components/WhiteInput";
import WhiteInterests from "../components/WhiteInterests";
import WhiteNumBuds from "../components/WhiteNumBuds";

export default function CreateRoomScreen({ navigation }) {
  const [name, onChangeName] = useState("");
  const [maxBuds, onChangeMaxBuds] = useState("4");
  const [interests, setInterests] = useState(null);
  const [open, setOpen] = useState(false);

  const { userState, usersDispatch } = useCustomContext();

  return (
    <Pressable style={styles.pressable} onPress={() => setOpen(false)}>
      <BackgroundView navigation={navigation}>
        <NextButton
          title="Create"
          callBack={async () => {
            const room = await createRoom(name, maxBuds, interests);
            navigation.navigate("NameScreen", {
              room: room,
              fromVideoScreen: false,
            });
          }}
        />
        <ScreenHeader title="Create a Room" />
        <WhiteInput
          label="Room Name"
          placeholder="Enter Name"
          onChangeText={onChangeName}
          value={name}
        />
        <WhiteNumBuds
          label="Max # of buds"
          maxBuds={maxBuds}
          onChangeMaxBuds={onChangeMaxBuds}
        />
        <WhiteInterests
          open={open}
          setOpen={setOpen}
          interests={interests}
          setInterests={setInterests}
        />
      </BackgroundView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
});
