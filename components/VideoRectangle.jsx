import { Image, View, StyleSheet } from "react-native";

export default function VideoRectangle({ avatarImg }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.box}
        source={require("../assets/video_icons/avatarBox.png")}
      />
      <Image style={styles.avatarImg} source={avatarImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "40%",
    height: 300,
    resizeMode: "contain",
    backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    backgroundColor: "blue",
  },
  avatarImg: {
    width: "20%",
    height: "35%",
    resizeMode: "contain",
    backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "auto",
        top: -300,
  },
});
