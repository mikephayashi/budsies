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
       source={require('../../assets/')}
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
                   source={require('../../assets/imgs/logo.PNG')}
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
   },
   block_layout: {
     marginTop: 0,
     marginBottom: 0,
     minHeight: 744,
     flexShrink: 0,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   group: {
     width: '100%',
     flexGrow: 1
   },
   flex: {
     flexGrow: 1
   },
   flex_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   image1: {
     flexGrow: 1,
     resizeMode: 'contain'
   },
   subtitle_box_layout: {
     position: 'absolute',
     height: 40,
     bottom: -20,
     left: -12.5,
     width: 410
   },
   subtitle: {
     color: '#273949ff',
     textAlign: 'center',
     letterSpacing: 0,
     lineHeight: 40,
     fontSize: 20,
     fontWeight: '700',
     fontStyle: 'normal',
     fontFamily: 'System' /* Balsamiq Sans */,
     paddingHorizontal: 0,
     paddingVertical: 0
   },
   subtitle_box: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center'
   },
   block1: {
     width: '100%',
     flexGrow: 1,
     backgroundColor: '#f5f5faff',
     borderRadius: 32,
     overflow: 'hidden',
     borderStyle: 'solid',
     borderColor: '#ffffffff',
     borderWidth: 3
   },
   hero_title: {
     color: '#273949ff',
     textAlign: 'center',
     letterSpacing: 0,
     lineHeight: 40,
     fontSize: 40,
     fontWeight: '700',
     fontStyle: 'normal',
     fontFamily: 'System' /* Balsamiq Sans */,
     paddingHorizontal: 0,
     paddingVertical: 0
   },
   hero_title_box: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center'
   }
 });
 