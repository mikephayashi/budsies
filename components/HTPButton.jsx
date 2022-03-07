import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import FadePressable from "./FadePressable";

export default function HTPButton({ navigation }) {

  return (
    <FadePressable
      onPress={() => navigation.navigate("HTPScreen")}
    >
      <View style={[styles.block1, styles.block1_layout]}>
        <View style={[styles.hero_title_box]}>
          <Text style={styles.hero_title} ellipsizeMode={"clip"}>
            {"How to Play"}
          </Text>
        </View>
      </View>
    </FadePressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#ffffffff",
    overflow: "hidden",
  },
  block1: {
    backgroundColor: "#f5f5faff",
    borderRadius: 32,
    overflow: "hidden",
    borderStyle: "solid",
    borderColor: "#ffffffff",
    borderWidth: 3,
  },
  block1_layout: {
    height: 70,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    bottom: -600,
    marginTop: 10,
  },
  hero_title: {
    color: "#273949ff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 40,
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: 'BalsamiqSans_400Regular',
    paddingHorizontal: 0,
    paddingVertical: 0,
    color: "white",
  },
  hero_title_box: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eab0a8"
  },
});
