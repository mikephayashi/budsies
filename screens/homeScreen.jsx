/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React, {useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { getRoom, navigateToVideoRoom } from "../FirebaseCalls";


export default function Home({ navigation }) {
  const [findCode, onChangeFindCode] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="contain"
        style={styles.image}
      >
        <Text>Home</Text>
        <Button
          style={"margin-top: 50px;"}
          title="Back"
          onPress={() => navigation.pop()}
        />
        <Button
          style={"margin-top: 50px;"}
          title="Create Room"
          onPress={() => navigation.navigate("CreateRoom")}
        />
        <Button
          style={"margin-top: 50px;"}
          title="Join Room"
          onPress={() => navigation.navigate("JoinRoom")}
        />
        <TextInput
          placeholder="Room Code"
          onChangeText={onChangeFindCode}
          value={findCode}
        />
        <Button
          title="Find Room"
          onPress={async () => {
            const docSnap = await getRoom(findCode);
            navigateToVideoRoom(docSnap.data(), navigation);
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
