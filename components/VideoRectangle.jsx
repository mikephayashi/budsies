import { Image, View, StyleSheet, Text } from "react-native";

export default function VideoRectangle({ avatarImg, name }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.box}
        source={require("../assets/video_icons/avatarBox.png")}
      />
      <View style={styles.avatarBox}>
        <Image style={styles.avatarImg} source={avatarImg} />
      </View>
      <Text style={styles.big_title} ellipsizeMode={"clip"}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1.5,
  },
  box: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
  },
  avatarBox: {
    width: "60%",
    height: "80%",
    overflow: "hidden",
    right: "2%",
    bottom: "10%",
    position: "absolute",
  },
  avatarImg: {
    width: "100%",
    height: "250%",
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
    position: "absolute",
  },
  big_title: {
    color: "#ffffffff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 36,
    fontSize: 30,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
    position: "absolute",
    bottom: "10%",
    left: "10%",
  },
});
