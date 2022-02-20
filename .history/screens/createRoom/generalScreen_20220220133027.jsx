import React from "react";
import { View, Button } from "react-native";

export default function GeneralScreen({ item, navigation }) {
  return (
    <View>
      <Button
        style={"margin-top: 50px;"}
        title="Back"
        onPress={() => navigation.pop()}
      />
    </View>
  );
}
