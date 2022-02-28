import { View, StyleSheet, TextInput, Text } from "react-native";

export default function WhiteInput({
  placeholder,
  value,
  onChangeText,
  label,
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.big_title} ellipsizeMode={"clip"}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    marginBottom: "2%"
  },
  input: {
    height: 40,
    width: " 60%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffffff",
  },
  big_title: {
    color: "#ffffffff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 36,
    fontSize: 30,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "System" /* Balsamiq Sans */,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
