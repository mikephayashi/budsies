import React from "react";
import BackgroundView from '../components/BackgroundView';
import StartButton from '../components/StartButton';

export default function StartScreen({ navigation }) {
  return (
    <BackgroundView showBack={false} showLogo={false} backgroundImg={require("../assets/Home_screen_2x_Size.png")}>
      <StartButton navigation={navigation}/>
    </BackgroundView>
  );
}
