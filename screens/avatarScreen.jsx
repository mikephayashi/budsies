import React from "react";
import PaddedView from "../components/PaddedView";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import Carousel from "react-native-snap-carousel";
import {Image, View, Text, StyleSheet} from 'react-native';

export default function AvatarScreen({ navigation }) {

  const data = [
    {
      image: require("../assets/girl1.png"),
    },
    {
      image: require("../assets/girl2.png"),
    },
    {
      image: require("../assets/girl3.png"),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <Image 
          source={item.image}
          style={{ width: 100, height: 100 }}
        />
        <Text>Hello? Index: {index}</Text>
        <NextButton navigation={navigation} screen="NameScreen" />
      </View>
    );
  };

  return (
    <PaddedView>
      <BackButton navigation={navigation} />
      <NextButton navigation={navigation} screen="NameScreen" />
      <Image 
          source={require("../assets/girl1.png")}
          style={{ width: 100, height: 100 }}
      />
      <Carousel
        data={data}
        renderItem={renderItem}
        itemWidth={300}
        sliderWidth={400}
        itemHeight={300}
        sliderHeight={300}
      />
    </PaddedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  }
});
