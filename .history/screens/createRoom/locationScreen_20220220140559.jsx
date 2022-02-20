import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useCustomContext } from '../../state/CustomContext';

export default function LocationScreen({ item, navigation }) {

  const { userState, usersDispatch } = useCustomContext();
  console.log(userState);
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
