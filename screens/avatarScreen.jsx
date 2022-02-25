import React from "react";
import PaddedView from "../components/PaddedView";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import Carousel from "react-native-snap-carousel";
import { Image, View, StyleSheet } from "react-native";
import BackgroundView from "../components/BackgroundView";
import FadePressable from "../components/FadePressable";
import {avatarImages} from '../shared/avatars';
import { useCustomContext } from "../state/CustomContext";


export default function AvatarScreen({ navigation }) {

  const { userState, usersDispatch } = useCustomContext();

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <FadePressable
          onPress={()=>usersDispatch({ type: "TEST", name: userState.avatarIndex, avatarIndex: index })}
        >
          <Image source={item.image} style={{ width: 100, height: 100 }} />
        </FadePressable>
      </View>
    );
  };

  return (
    <BackgroundView>
      <PaddedView>
        <BackButton navigation={navigation} />
        <NextButton navigation={navigation} screen="NameScreen" />
        <Carousel
          data={avatarImages}
          renderItem={renderItem}
          itemWidth={300}
          sliderWidth={400}
          itemHeight={300}
          sliderHeight={300}
        />
      </PaddedView>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
