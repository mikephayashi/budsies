import React from "react";
import { View, Button } from "react-native";

export default function GeneralScreen({ item, navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: "red"}}>
      <Button
        style={{marginTop: "200px", color: white}}
        title="Back"
        onPress={() => navigation.pop()}
      />
    </View>
  );
}
