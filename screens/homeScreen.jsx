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
import HelpModal from "../components/HelpModal";

export default function Home({ navigation }) {
  const [createModal, setCreateModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const [findModal, setFindModal] = useState(false);

  return (
    <BackgroundView navigation={navigation}>
      <HelpModal
        modalVisible={createModal}
        setModalVisible={setCreateModal}
        title="No Buddies"
        description={`Find Room: Use a code that \n a buddy gave to you to join a \n room directly!`}
      />
      <HelpModal
        modalVisible={joinModal}
        setModalVisible={setJoinModal}
        title="Some Buddies"
        description={`Join Room: Choose a room \n based on your interests!`}
      />
      <HelpModal
        modalVisible={findModal}
        setModalVisible={setFindModal}
        title="Best Buddies"
        description={`Create Room: Make a room \n based on your interests!`}
      />
      <View style={styles.column}>
        <HomeItem
          onPress={() => navigation.navigate("CreateRoom")}
          title="NO BUDDIES"
          buttonText="Create Room"
          image={require("../assets/find_room_icon.png")}
          popQuestion={() => setCreateModal(true)}
          color="#d39a8e"
        />
        <HomeItem
          onPress={() => navigation.navigate("JoinRoom")}
          title="SOME BUDDIES"
          buttonText="Join Room"
          image={require("../assets/join_room_icon.png")}
          popQuestion={() => setJoinModal(true)}
          color="#e2c3ae"
        />
        <HomeItem
          onPress={() => navigation.navigate("FindRoom")}
          title="BEST BUDDIES"
          buttonText="Find Room"
          image={require("../assets/join_room_icon.png")}
          popQuestion={() => setFindModal(true)}
          color="#f1c0c0"
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
