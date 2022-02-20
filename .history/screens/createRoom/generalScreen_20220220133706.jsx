import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function GeneralScreen({ item, navigation }) {
  return (
    <View style={container}>
      <Button color="white" title="Back" onPress={() => navigation.pop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
      flex: 1, 
      backgroundColor: "red",
      padding: "20px",
    },
});
