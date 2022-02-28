import React from "react";
import NextButton from "../components/NextButton";
import Carousel from "react-native-snap-carousel";
import { Image, View, StyleSheet } from "react-native";
import BackgroundView from "../components/BackgroundView";
import FadePressable from "../components/FadePressable";
import { avatarImages } from "../shared/avatars";
import { useCustomContext } from "../state/CustomContext";

const itemWidth = 300;
const itemHeight = 400;

export default function AvatarScreen({ navigation }) {
  const { userState, usersDispatch } = useCustomContext();

  const WEIRD_OFFSET = 3;

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <FadePressable
          onPress={() =>
            usersDispatch({
              type: "TEST",
              name: userState.avatarIndex,
              avatarIndex: index - WEIRD_OFFSET,
            })
          }
        >
          <Image
            source={item.image}
            style={styles.avatarImg}
            resizeMode="contain"
          />
        </FadePressable>
      </View>
    );
  };

  return (
    <BackgroundView navigation={navigation}>
      <NextButton navigation={navigation} screen="NameScreen" />
      {/* <View styles={styles.smaller}> */}
        <Carousel
          data={avatarImages}
          renderItem={renderItem}
          itemWidth={itemWidth}
          sliderWidth={1000}
          itemHeight={itemHeight}
          sliderHeight={10}
          loop={true}
        />
      {/* </View> */}
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  smaller: {
    width: "100%",
    height: "100%",
  },
  avatarImg: {
    width: itemWidth,
    height: itemHeight,
  },
});
