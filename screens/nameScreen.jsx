import React, { useState } from "react";
import { TextInput, Button } from "react-native";
import PaddedView from "../components/PaddedView";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import { useCustomContext } from "../state/CustomContext";

export default function AvaNameScreentarScreen({ navigation }) {
  const [name, onChangeName] = useState("");
  const { userState, usersDispatch } = useCustomContext();
  return (
    <PaddedView>
      <BackButton navigation={navigation} />
      <NextButton navigation={navigation} screen="HomeScreen" />
      <TextInput
        placeholder="Enter Name"
        onChangeText={onChangeName}
        value={name}
      />
      <Button
        title="Declare Name"
        onPress={() => {
          usersDispatch({ type: "TEST", name: name, avatarIndex: userState.avatarIndex });
        }}
      />
    </PaddedView>
  );
}
