/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { getRoom, navigateToVideoRoom } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import BackgroundView from "../components/BackgroundView";
import HomeItem from "../components/HomeItem";

export default function Home({ navigation }) {
  const [findCode, onChangeFindCode] = useState("");
  const { userState, usersDispatch } = useCustomContext();

  return (
    <BackgroundView navigation={navigation}>
      <View style={styles.column}>
        <HomeItem
          onPress={() => navigation.navigate("CreateRoom")}
          title="FIND BUDDIES"
          buttonText="Create Room"
          image={require("../assets/find_room_icon.png")}
        />
        <HomeItem
          onPress={() => navigation.navigate("JoinRoom")}
          title="JOIN BUDDIES"
          buttonText="Join Room"
          image={require("../assets/join_room_icon.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Room Code"
          onChangeText={onChangeFindCode}
          value={findCode}
        />
        <HomeItem
          onPress={async () => {
            const docSnap = await getRoom(findCode);
            navigateToVideoRoom(
              docSnap.data(),
              navigation,
              userState.name,
              userState.avatarUri
            );
          }}
          title="CREATE BUDDIES"
          buttonText="Find Room"
          image={require("../assets/join_room_icon.png")}
        />
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
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
});
