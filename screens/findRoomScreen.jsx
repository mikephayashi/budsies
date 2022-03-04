import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { filterRooms } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import BackgroundView from "../components/BackgroundView";
import { getRoom, navigateToVideoRoom } from "../FirebaseCalls";
import WhiteButton from "../components/WhiteButton";
import WhiteInput from "../components/WhiteInput";
import RoomButton from "../components/RoomButton";
import WhiteInterestsJoin from "../components/WhiteInterestsJoin";

export default function FindRoomScreen({ navigation }) {
  const { userState, usersDispatch } = useCustomContext();
  const [findCode, onChangeFindCode] = useState("");

  return (
    <BackgroundView navigation={navigation}>
      <WhiteInput
        label="Shareable Code"
        placeholder="Enter NaCodeme"
        onChangeText={onChangeFindCode}
        value={findCode}
      />
      <WhiteButton
      style={styles.find}
        title="Join"
        onPress={async () => {
          const docSnap = await getRoom(findCode);
          navigateToVideoRoom(
            docSnap.data(),
            navigation,
            userState.name,
            userState.avatarUri
          );
        }}
      />
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  find:{
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  column: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
  },
  input: {
    height: 40,
    width: "20%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffffff",
  },
  header: {
    color: "white",
    fontSize: 30,
  },
});
