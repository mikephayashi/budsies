/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React from 'react';
 import { StyleSheet, Text, Image, ImageBackground } from 'react-native';
 
 export default function Home(props) {
   return (
     <ImageBackground
       style={[styles.block, styles.block_layout]}
       source={require('../../assets/start_background.png')}
       resizeMode="contain">
     </ImageBackground>
   );
 }
 
 
 const styles = StyleSheet.create({
   block: {
     backgroundColor: '#ffffffff',
     overflow: 'hidden'
   }
 });
 