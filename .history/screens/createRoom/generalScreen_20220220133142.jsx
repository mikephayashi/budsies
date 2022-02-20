import React from "react";
import { View, Button } from "react-native";

export default function GeneralScreen({ item, navigation }) {
  return (
    <View style={{flex: 1}}>
      <Button
        style={{marginTop: }}
        title="Back"
        onPress={() => navigation.pop()}
      />
    </View>
  );
}
