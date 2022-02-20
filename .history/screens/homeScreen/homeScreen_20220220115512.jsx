/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React from 'react';
 import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
 import { Px } from '../../posize';
 
 export default function Home(props) {
   return (
     <ImageBackground
       style={[styles.block, styles.block_layout]}
    //    source={require('../../assets/imgs/start_background.PNG')}
    source={require('../../assets/adaptive-icon.png')}
       resizeMode="contain">
       <Px.View
         x="326fr 42.45% 326fr"
         y="56px minmax(0px, max-content) 56px"
         style={styles.group}>
         <Px.View
           x="0px 481fr 0px"
           y="0px minmax(0px, max-content) 0px"
           style={styles.group}>
           <Px.View
             x="1fr 100% 1fr"
             y="0px minmax(0px, max-content) 0px"
             style={styles.flex}>
             <View style={styles.flex_item}>
               <Px.View
                 x="48fr 80.67% 45fr"
                 y="27px minmax(0px, max-content) 0px"
                 style={styles.group}>
                 <Px.ImageBackground
                   x="1fr 100% 1fr"
                   y="0px 122px 0px"
                   style={styles.image1}
                   source={require('../../assets/adaptive-icon.png')}
                 />
                 <View style={[styles.subtitle_box, styles.subtitle_box_layout]}>
                   <Text style={styles.subtitle} ellipsizeMode={'clip'}>
                     {'A low-stakes remote socialization platform'}
                   </Text>
                 </View>
               </Px.View>
             </View>
             <View style={styles.flex_item}>
               <Px.View
                 x="3px 478fr 0px"
                 y="383px minmax(0px, max-content) 0px"
                 style={styles.block1}>
                 <Px.View
                   x="0px 478fr 0px"
                   y="30px minmax(0px, max-content) 30px"
                   style={styles.hero_title_box}>
                   <Text style={styles.hero_title} ellipsizeMode={'clip'}>
                     {'Meet your buddies'}
                   </Text>
                 </Px.View>
               </Px.View>
             </View>
           </Px.View>
         </Px.View>
       </Px.View>
     </ImageBackground>
   );
 }
 
 Home.inStorybook = true;
 Home.fitScreen = false;
 Home.scrollHeight = 744;
 
 const styles = StyleSheet.create({
   block: {
     backgroundColor: '#ffffffff',
     overflow: 'hidden'
   }
 });
 