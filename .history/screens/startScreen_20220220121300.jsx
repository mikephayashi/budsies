import {View, Text, Button} from 'react-native';

 import React from "react";
 import { StyleSheet, Image, View, ImageBackground } from "react-native";
 
 export default function StartScreen(pro{item, navigation}ps) {
   return (
     <View style={styles.container}>
       <ImageBackground
         source={require("../assets/start_background.png")}
         resizeMode="contain"
         style={styles.image}
       >
       <Image 
         source={require("../assets/logo.png")}>
       </Image>
       </ImageBackground>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: "red",
     flex: 1,
   },
   image: {
     flex: 1,
     // justifyContent: "center"
   },
 });
 