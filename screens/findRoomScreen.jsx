import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import { useCustomContext } from "../state/CustomContext";
import BackgroundView from "../components/BackgroundView";
import { getRoom, navigateToVideoRoom } from "../FirebaseCalls";
import WhiteButton from "../components/WhiteButton";
import WhiteInput from "../components/WhiteInput";
import ScreenHeader from "../components/ScreenHeader";

export default function FindRoomScreen({ navigation }) {
  const { userState, usersDispatch } = useCustomContext();
  const [findCode, onChangeFindCode] = useState("");

  return (
    <BackgroundView navigation={navigation}>
    <ScreenHeader title="Find a Room" />
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
