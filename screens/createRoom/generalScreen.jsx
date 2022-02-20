import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useCustomContext } from '../../state/CustomContext';
import {db} from '../../firebase';
import { doc, setDoc } from "firebase/firestore"; 

export default function GeneralScreen({ item, navigation }) {

  const { userState, usersDispatch } = useCustomContext();
  return (
    <View style={styles.container}>
      <Button color="white" title="Back" onPress={() => navigation.pop()} />
      <Button color="white" title="test" onPress={() => usersDispatch({ type: 'TEST', payload: !userState, })} />
      <Button color="white" title="Location" onPress={() => navigation.navigate('Location')} />
      <Button color="white" title="Firebase" onPress={async () => {
        await setDoc(doc(db, "cities", "LA"), {
          test: userState,
        })
      }} />
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
