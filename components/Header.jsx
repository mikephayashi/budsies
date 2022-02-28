import { Text, StyleSheet, View } from "react-native";

export default function Header({title}) {
  return (
    <>
      <Text style={styles.hero_title} ellipsizeMode={"clip"}>
        {title}
      </Text>
      <View style={styles.box} />
    </>
  );
}

const styles = StyleSheet.create({
    box: {
        height: 1,
        width: '95%',
        backgroundColor: '#ffffffff'
      },
    hero_title: {
      color: "#ffffffff",
      textAlign: "left",
      letterSpacing: 0,
      lineHeight: 48,
      fontSize: 40,
      fontWeight: "400",
      fontStyle: "normal",
      fontFamily: "System" /* Balsamiq Sans */,
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
  });