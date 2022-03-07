/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import BackgroundView from "../components/BackgroundView";
import HomeItem from "../components/HomeItem";
import HelpModal from "../components/HelpModal";
import { ImagesContext, getImage } from "../state/ImagesContext";

export default function Home({ navigation }) {
  const [createModal, setCreateModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const [findModal, setFindModal] = useState(false);
  const Images = useContext(ImagesContext);

  return (
    <BackgroundView navigation={navigation}>
      <HelpModal
        modalVisible={joinModal}
        setModalVisible={setJoinModal}
        title="No Buddies"
        description={`Join Room: Choose a room \n based on your interests!`}
      />
      <HelpModal
        modalVisible={findModal}
        setModalVisible={setFindModal}
        title="Some Buddies"
        description={`Find Room: Use a code that \n a buddy gave to you to join a \n room directly!`}
      />
      <HelpModal
        modalVisible={createModal}
        setModalVisible={setCreateModal}
        title="Best Buddies"
        description={`Create Room: Make a room \n based on your interests!`}
      />
      <View style={styles.column}>
        <HomeItem
          onPress={() => navigation.navigate("JoinRoom")}
          title="SOME BUDDIES"
          buttonText="Join Room"
          image={Images[getImage("find_room")]}
          popQuestion={() => setJoinModal(true)}
          color="#d39a8e"
        />
        <HomeItem
          onPress={() => navigation.navigate("FindRoom")}
          title="NO BUDDIES"
          buttonText="Find Room"
          image={Images[getImage("join_room")]}
          popQuestion={() => setFindModal(true)}
          color="#e2c3ae"
        />
        <HomeItem
          onPress={() => navigation.navigate("CreateRoom")}
          title="BEST BUDDIES"
          buttonText="Create Room"
          image={Images[getImage("create_room")]}
          popQuestion={() => setCreateModal(true)}
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
