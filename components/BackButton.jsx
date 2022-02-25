import React from "react";
import { Button } from "react-native";

export default function BackButton({ navigation }) {
  return (
    <Button
      color="blue"
      title="Back"
      onPress={() => navigation.pop()}
    />
  );
}
