import React, {useContext} from "react";

import { ImagesContext, getImage } from "../state/ImagesContext";
import BackgroundView from "../components/BackgroundView";
import StartButton from "../components/StartButton";
import HTPButton from "../components/HTPButton";

export default function StartScreen({ navigation }) {
  const Images = useContext(ImagesContext);
  return (
    <BackgroundView
      showBack={false}
      showLogo={false}
      backgroundImg={Images[getImage('home_background')]}
    >
      <StartButton navigation={navigation} />
      <HTPButton navigation={navigation}/>
    </BackgroundView>
  );
}
