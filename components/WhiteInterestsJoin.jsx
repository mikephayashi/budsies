import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { roomTypes } from "../shared/rooms";
import WhiteButton from "../components/WhiteButton";

export default function WhiteInterestsJoin({
  open,
  setOpen,
  interests,
  setInterests,
  onPress,
}) {
  const [items, setItems] = useState(roomTypes);

  return (
    <View
      style={
        open
          ? { ...styles.bigHeight, ...styles.row }
          : { ...styles.smallHeight, ...styles.row }
      }
    >
      <Text style={styles.big_title} ellipsizeMode={"clip"}>
        Interests
      </Text>
      <View
        style={
          open
            ? { ...styles.bigHeight, ...styles.dropContainer }
            : { ...styles.smallHeight, ...styles.dropContainer }
        }
      >
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
          renderBadgeItem={({ label }) => (
            <Text style={styles.dropText}>{label}</Text>
          )}
        />
      </View>
      <WhiteButton
        title="Search"
        onPress={() => onPress()}
        style={styles.search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bigHeight: {
    height: 300,
  },
  smallHeight: {
    height: 50,
  },
  dropText: {
    color: "#be8b81",
    fontFamily: "BalsamiqSans_400Regular",
  },
  row: {
    flexDirection: "row",
    width: "49%",
    justifyContent: "space-between",
    marginTop: "4%",
    marginLeft: "15%",
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
    left: 70,
  },
  dropContainer: {
    width: 500,
  },
});
