import WebView from "react-native-webview";
import BackButton from "../components/BackButton";
import { View, StyleSheet } from "react-native";

export default function GameScreen({ navigation, route }) {
  const uri = route.params.uri;
  return (
    <View style={styles.container}>
      <WebView
        source={{
          // uri: "https://www.coolmathgames.com/0-four-in-a-row#immersiveModal",
          uri: uri
        }}
      />
      <BackButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
