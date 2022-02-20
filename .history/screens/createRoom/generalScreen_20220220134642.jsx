import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useCustomContext }from '../CustomContext'

export default function GeneralScreen({ item, navigation }) {
  return (
    <View style={styles.container}>
      <Button color="white" title="Back" onPress={() => navigation.pop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
      display: "flex",
      flex: 1, 
      backgroundColor: "red",
      paddingTop: 50,
    },
});
