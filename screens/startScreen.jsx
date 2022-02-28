import React from "react";
import BackgroundView from '../components/BackgroundView';
import StartButton from '../components/StartButton';

export default function StartScreen({ navigation }) {
  return (
    <BackgroundView showBack={false}>
      <StartButton navigation={navigation}/>
    </BackgroundView>
  );
}
