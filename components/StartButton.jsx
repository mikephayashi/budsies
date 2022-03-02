import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import FadePressable from "../components/FadePressable";

export default function StartButton({ navigation }) {

  return (
    <FadePressable
      onPress={() => navigation.navigate("AvatarScreen")}
    >
      <View style={[styles.block1, styles.block1_layout]}>
        <View style={[styles.hero_title_box]}>
          <Text style={styles.hero_title} ellipsizeMode={"clip"}>
            {"Meet your buddies"}
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
    height: 100,
    width: 478,
    minWidth: 478,
    marginLeft: "auto",
    marginRight: "auto",
    bottom: -600,
  },
  hero_title: {
    color: "#273949ff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 40,
    fontSize: 40,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "System" /* Balsamiq Sans */,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  hero_title_box: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
