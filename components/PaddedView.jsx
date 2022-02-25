import React from "react";
import { View, StyleSheet } from "react-native";

export default function AvatarScreen({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    display: "flex",
    flex: 1,
  },
});
