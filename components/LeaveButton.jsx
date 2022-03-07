import { View, Text, StyleSheet } from "react-native";
import FadePressable from "./FadePressable";

export default function LeaveButton({ text, onPress }) {
  return (
    <FadePressable style={styles.fade}
    onPress={() => onPress()}
    >
      <View style={styles.container}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </FadePressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F5F5FA",
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 34,
    marginTop: "auto",
    marginBottom: "auto",
  },
  fade: {
    width: "40%",
    height: "45%",
    marginTop: "3%"
  },
});
