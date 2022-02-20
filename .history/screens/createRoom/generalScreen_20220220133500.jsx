import React from "react";
import { View, Button } from "react-native";

export default function GeneralScreen({ item, navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: "red"}}>
      <Button
      color="white"
        style={styles.button}
        title="Back"
        onPress={() => navigation.pop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
    button: {
        marginTop: "200px";
    }
});