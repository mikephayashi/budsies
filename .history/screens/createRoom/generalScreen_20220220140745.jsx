import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useCustomContext } from '../../state/CustomContext';

export default function GeneralScreen({ item, navigation }) {

  const { userState, usersDispatch } = useCustomContext();
  return (
    <View style={styles.container}>
      <Button color="white" title="Back" onPress={() => navigation.pop()} />
      <Button color="white" title="test" onPress={() => usersDispatch({ type: 'TEST', payload: true, })} />
      <Button color="white" title="Location" onPress={() => navigation.navigate('Location')} />
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
