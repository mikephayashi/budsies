import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import NextButton from "../components/NextButton";
import { useCustomContext } from "../state/CustomContext";
import BackgroundView from "../components/BackgroundView";
import WhiteInput from "../components/WhiteInput";

export default function AvaNameScreentarScreen({ navigation }) {
  const [name, onChangeName] = useState("");
  const [age, onChangeAge] = useState("");
  const { userState, usersDispatch } = useCustomContext();
  return (
    <BackgroundView navigation={navigation}>
      <NextButton navigation={navigation} screen="HomeScreen" />

      <View style={styles.column}>
        <WhiteInput
          label="NAME"
          placeholder="Enter Name"
          onChangeText={onChangeName}
          value={name}
        />

        <WhiteInput
          label="AGE"
          placeholder="Enter Age"
          onChangeText={onChangeAge}
          value={age}
        />

        <Button
          title="Declare Name"
          onPress={() => {
            usersDispatch({
              type: "TEST",
              name: name,
              avatarIndex: userState.avatarIndex,
            });
          }}
        />
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});