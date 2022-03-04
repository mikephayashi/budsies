import React from "react";
import { View, Image, StyleSheet } from "react-native";
import FadePressable from "./FadePressable";

export default function IconRow({ isExpand, setExpand, list, current, setCurrent }) {
  return (
    
      <View style={styles.row}>
        <FadePressable onPress={() => setExpand(!isExpand)}>
          <Image style={styles.icon} source={list[current]} />
        </FadePressable>
        {isExpand
          ? Object.keys(list).map((cur) => {
              if (cur === current) {
                return null;
              }
              return (
                <FadePressable
                key={cur}
                  onPress={() => {
                    setCurrent(cur);
                    setExpand(false);
                  }}
                >
                  <Image style={styles.icon} source={list[cur]} />
                </FadePressable>
              );
            })
          : null}
      </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 5,
    width: "100%",
  },
  icon: {
    width: 100,
    height: 100,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "blue",
    width: 320,
    marginRight: "auto",
  },
});
