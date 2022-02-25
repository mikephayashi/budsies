import React from "react";
import { Button } from "react-native";

export default function NextButton({ screen, navigation }) {
  return (
    <Button
      color="blue"
      title="Next"
      onPress={() => navigation.navigate(screen)}
    />
  );
}
