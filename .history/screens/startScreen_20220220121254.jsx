import {View, Text, Button} from 'react-native';

export default function StartScreen({item, navigation}) {
    return (
        <View>
            <Text>Start Screen</Text>
            <Button style={"margin-top: 50px;"} title="Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    );
}

/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
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
 