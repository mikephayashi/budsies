import { View, StyleSheet, Text } from "react-native";
import FadePressable from "./FadePressable";

export default function WhiteNumBuds({ label, maxBuds, onChangeMaxBuds }) {
  const numBuds = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <View style={styles.row}>
      <Text style={styles.big_title} ellipsizeMode={"clip"}>
        {label}
      </Text>
      <View style={{ width: 40 }} />
      {numBuds.map((num) => {
        return (
          <FadePressable
            onPress={() => onChangeMaxBuds(num)}
            style={styles.fade}
          >
            <Text style={num === maxBuds ? {...styles.number, ...styles.selected} : styles.number}>{num}</Text>
          </FadePressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  selected: {
    borderWidth: 4,
    borderColor: "#f9d6bf"
  },
  row: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    marginTop: "4%",
    marginLeft: "auto",
    marginRight: "auto",
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
    letterSpacing: 0,
    lineHeight: 36,
    fontSize: 30,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "BalsamiqSans_400Regular",
    paddingHorizontal: 0,
    paddingVertical: 0,
    flex: 5,
  },
  fade: {
    flex: 1,
  },
  number: {
    color: "white",
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 30,
    textAlign: "center",
    paddingTop: "auto",

  },
});
