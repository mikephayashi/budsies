/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import { getRoom, navigateToVideoRoom } from "../FirebaseCalls";
import { useCustomContext } from "../state/CustomContext";
import BackgroundView from "../components/BackgroundView";
import HomeItem from "../components/HomeItem";
import CustomModal from "../components/CustomModal";
import WhiteButton from "../components/WhiteButton";

export default function Home({ navigation }) {
  const [findCode, onChangeFindCode] = useState("");
  const [codeModal, setCodeModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const [findModal, setFindModal] = useState(false);
  const { userState, usersDispatch } = useCustomContext();

  return (
    <BackgroundView navigation={navigation}>
      <CustomModal modalVisible={codeModal} setModalVisible={setCodeModal}>
        <Text style={styles.header}>Enter Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Room Code"
          onChangeText={onChangeFindCode}
          value={findCode}
        />
        <WhiteButton
          title="Join Room"
          onPress={async () => {
            setModalVisible(false);
            const docSnap = await getRoom(findCode);
            navigateToVideoRoom(
              docSnap.data(),
              navigation,
              userState.name,
              userState.avatarUri
            );
          }}
        />
      </CustomModal>
      <CustomModal modalVisible={createModal} setModalVisible={setCreateModal}>
        <Text>Create Room</Text>
      </CustomModal>
      <CustomModal modalVisible={joinModal} setModalVisible={setJoinModal}>
        <Text>Join Room</Text>
      </CustomModal>
      <CustomModal modalVisible={findModal} setModalVisible={setFindModal}>
        <Text>Find Room</Text>
      </CustomModal>
      <View style={styles.column}>
        <HomeItem
          onPress={() => navigation.navigate("CreateRoom")}
          title="FIND BUDDIES"
          buttonText="Create Room"
          image={require("../assets/find_room_icon.png")}
          popQuestion={() => setCreateModal(true)}
        />
        <HomeItem
          onPress={() => navigation.navigate("JoinRoom")}
          title="JOIN BUDDIES"
          buttonText="Join Room"
          image={require("../assets/join_room_icon.png")}
          popQuestion={() => setJoinModal(true)}
        />
        <HomeItem
          onPress={async () => {
            setCodeModal(true);
          }}
          title="CREATE BUDDIES"
          buttonText="Find Room"
          image={require("../assets/join_room_icon.png")}
          popQuestion={() => setFindModal(true)}
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
  header: {
    color: "white",
    fontSize: 30,
  },
});
