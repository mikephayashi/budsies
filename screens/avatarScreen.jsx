import React from "react";
import PaddedView from "../components/PaddedView";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";

export default function AvatarScreen({ navigation }) {
  return (
    <PaddedView>
      <BackButton navigation={navigation}/>
      <NextButton navigation={navigation} screen="NameScreen"/>
    </PaddedView>
  );
}
