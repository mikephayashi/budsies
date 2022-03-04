import { Text, StyleSheet, View, Image } from "react-native";
import FadePressable from "./FadePressable";

export default function Header({ title, popQuestion }) {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.hero_title} ellipsizeMode={"clip"}>
          {title}
        </Text>
        <FadePressable onPress={() => popQuestion()}>
          <Image
            style={styles.question}
            source={require("../assets/question.png")}
          />
        </FadePressable>
      </View>

      <View style={styles.box} />
    </>
  );
}

const styles = StyleSheet.create({
  question: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    height: 1,
    width: "95%",
    backgroundColor: "#ffffffff",
  },
  hero_title: {
    color: "#ffffffff",
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 48,
    fontSize: 40,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
