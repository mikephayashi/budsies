import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { roomTypes } from "../shared/rooms";

export default function WhiteInterests({
  open,
  setOpen,
  interests,
  setInterests,
}) {
  const [items, setItems] = useState(roomTypes);

  return (
    <View style={styles.row}>
      <Text style={styles.big_title} ellipsizeMode={"clip"}>
        Interests
      </Text>
      <DropDownPicker
        textStyle={styles.dropText}
        placeholder="Choose Interests"
        style={styles.dropDown}
        value={interests}
        setValue={setInterests}
        open={open}
        setOpen={setOpen}
        items={items}
        setItems={setItems}
        multiple={true}
        renderBadgeItem={({ label }) => <Text style={styles.dropText}>{label}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropText: {
    color: "#be8b81",
    fontFamily: "BalsamiqSans_400Regular",
  },
  row: {
    flexDirection: "row",
    width: "49%",
    justifyContent: "space-between",
    marginTop: "4%",
    marginLeft: "20%",
  },
  input: {
    height: 40,
    width: " 60%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffffff",
  },
  big_title: {
    color: "#f9d6bf",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 36,
    fontSize: 30,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  dropDown: {
    width: "74%",
    alignSelf: "flex-end",
  },
});
