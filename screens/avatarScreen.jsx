import React, { useState } from "react";
import { Button } from "react-native";
import NextButton from "../components/NextButton";
import BackgroundView from "../components/BackgroundView";
import { useCustomContext } from "../state/CustomContext";
import JasperSelector from "../components/JasperSelector";
import TranSelector from "../components/TranSelector";

export default function AvatarScreen({ navigation, route }) {
  const fromScreen = route.params.fromScreen;
  const { userState, usersDispatch } = useCustomContext();
  const [isJasper, setIsJasper] = useState(true);

  const [hat, setHat] = useState("Grey");
  const [skin, setSkin] = useState("Tan");
  const [shirt, setShirt] = useState("Blue");
  const [glasses, setGlasses] = useState("None");

  const getTranAvatarUri = () => {
    return (
      "Tran_Hat-None" +
      "_Shirt-" +
      shirt +
      "_Skin-" +
      skin +
      "_Glasses-" +
      glasses
    );
  };

  const getJasperAvatarUri = () => {
    return (
      "Jasper_Hat-" +
      hat +
      "_Shirt-" +
      shirt +
      "_Skin-" +
      skin +
      "_Glasses-" +
      glasses
    );
  };

  return (
    <BackgroundView navigation={navigation}>
      <NextButton
        navigation={navigation}
        callBack={() => {
          usersDispatch({
            type: "TEST",
            name: userState.avatarIndex,
            avatarUri: isJasper ? getJasperAvatarUri() : getTranAvatarUri(),
          });
          navigation.navigate("NameScreen", { fromScreen: fromScreen });
        }}
      />
      {isJasper ? (
        <JasperSelector
          hat={hat}
          setHat={setHat}
          setSkin={setSkin}
          setShirt={setShirt}
          glasses={glasses}
          setGlasses={setGlasses}
          getAvatarUri={getJasperAvatarUri}
        />
      ) : (
        <TranSelector
          setSkin={setSkin}
          setShirt={setShirt}
          glasses={glasses}
          setGlasses={setGlasses}
          getAvatarUri={getTranAvatarUri}
        />
      )}
      <Button title="Switch" onPress={() => setIsJasper(!isJasper)} />
    </BackgroundView>
  );
}
