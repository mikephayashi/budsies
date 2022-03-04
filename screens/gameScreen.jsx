import WebView from "react-native-webview";
import BackButton from "../components/BackButton";
import { View, StyleSheet } from "react-native";

export default function GameScreen({ navigation, route }) {
  // const uri = route.params.uri;
  return (
    <View style={styles.container}>
    <BackButton navigation={navigation} />
      <WebView
        source={{
          // uri: "https://www.coolmathgames.com/0-four-in-a-row#immersiveModal",
          uri: uri
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#272727",
  }
});
