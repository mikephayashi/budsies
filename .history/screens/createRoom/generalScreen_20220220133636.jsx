import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function GeneralScreen({ item, navigation }) {
  return (
    <View style={}>
      <Button
      color="white"
        style={styles.button}
        title="Back"
        onPress={() => navigation.pop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
    {flex: 1, backgroundColor: "red"}
});