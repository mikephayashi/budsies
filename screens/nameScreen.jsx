import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useCustomContext } from "../state/CustomContext";
import BackgroundView from "../components/BackgroundView";
import WhiteInput from "../components/WhiteInput";
import NextButton from "../components/NextButton";
import { navigateToVideoRoom } from "../FirebaseCalls";

export default function NameScreen({ navigation, route }) {
  const fromScreen = route.params.fromScreen;
  const { userState, usersDispatch } = useCustomContext();
  console.log("name: ", userState);
  const [name, onChangeName] = useState(userState.name ?? "");
  return (
    <BackgroundView navigation={navigation}>
      <NextButton
        title="Save"
        callBack={() => {
          usersDispatch({
            type: "TEST",
            name: name,
            avatarUri: userState.avatarUri,
          });
          if (fromScreen === "VideoScreen") {
            const room = route.params.room;
            const docId = route.params.docId;
            navigateToVideoRoom(room, navigation, name, userState.avatarUri, docId);
          } else if (fromScreen === "StartScreen") {
            navigation.navigate("HomeScreen");
          }
        }}
      />
      <View style={styles.column}>
        <WhiteInput
          label="NAME"
          placeholder="Enter Name"
          onChangeText={onChangeName}
          value={name}
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
