import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FadePressable from "../components/FadePressable";

export default function NextButton({ screen, navigation }) {
  return (
    <FadePressable
      onPress={() => navigation.navigate(screen)}
    >
    <View style={styles.position}>
    <View style={[styles.big_title_box, styles.block1, styles.block1_layout]}>
        <Text style={styles.big_title} ellipsizeMode={"clip"}>
          {"Next"}
        </Text>
      </View>
    </View>

    </FadePressable>
  );
}

const styles = StyleSheet.create({
  position: {
    position: "absolute",
    right: "4%", 
    bottom: -680,
  },
  block1_layout: {
    height: 52,
    width: 138,
    minWidth: 138
  },
  block1: {
    backgroundColor: '#f5f5faff',
    borderRadius: 26,
    overflow: 'hidden',
    borderStyle: 'solid',
    borderColor: '#f5f5faff',
    borderWidth: 3
  },
  big_title: {
    color: "#273949ff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 40,
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "System" /* Balsamiq Sans */,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  big_title_box: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
