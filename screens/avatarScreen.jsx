import React, { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import FadePressable from "../components/FadePressable";
import NextButton from "../components/NextButton";
import BackgroundView from "../components/BackgroundView";
import { useCustomContext } from "../state/CustomContext";
import { avatarImages } from "../shared/avatarImages";
import IconRow from "../components/IconRow";

export default function AvatarScreen({ navigation, route }) {
  // const fromScreen = route.params.fromScreen;
  const fromScreen = "";
  const { userState, usersDispatch } = useCustomContext();

  const genders = {
    boy: require("../assets/icons/Boy_Button.png"),
    girl: require("../assets/icons/Girl_Button.png"),
  };

  const skins = {
    Light: require("../assets/icons/Light_Skin_Tone_Icon.png"),
    Tan: require("../assets/icons/Tan_Skin_Tone_Icon.png"),
    Golden: require("../assets/icons/Golden_Skin_Tone_Icon.png"),
  };

  const shirts = {
    White: require("../assets/icons/White_Shirt_Icon.png"),
    Blue: require("../assets/icons/Blue_Shirt_Icon.png"),
    Purple: require("../assets/icons/Purple_Shirt_Icon.png"),
  };

  const sweaters = {
    Pink: require("../assets/icons/Pink_Sweater_Icon.png"),
    Blue: require("../assets/icons/Blue_Sweater_Icon.png"),
    Grey: require("../assets/icons/Grey_Sweater_Icon.png"),
  };

  const glasseses = {
    Brown: require("../assets/icons/Brown_Glasses_Icon.png"),
    None: require("../assets/icons/No_Glasses_Icon.png"),
  };

  const hats = {
    Grey: require("../assets/icons/Grey_Hat_Icon.png"),
    None: require("../assets/icons/No_Hat_Icon.png"),
  };

  const [gender, setGender] = useState("boy");
  const [hat, setHat] = useState("Grey");
  const [skin, setSkin] = useState("Tan");
  const [shirt, setShirt] = useState("White");
  const [sweater, setSweater] = useState("Pink");
  const [glasses, setGlasses] = useState("Brown");

  const [expandGender, setExpandGender] = useState(false);
  const [expandSkin, setExpandSkin] = useState(false);
  const [expandShirt, setExpandShirt] = useState(false);
  const [expandSweater, setExpandSweater] = useState(false);
  const [expandGlasses, setExpandGlasses] = useState(false);
  const [expandHat, setExpandHat] = useState(false);

  const getAvatarUri = () => {
    if (gender === "boy") {
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
    } else {
      return (
        "Tran_Hat-None" +
        "_Shirt-" +
        sweater +
        "_Skin-" +
        skin +
        "_Glasses-" +
        glasses
      );
    }
  };

  return (
    <BackgroundView navigation={navigation}>
      <NextButton
        navigation={navigation}
        callBack={() => {
          usersDispatch({
            type: "TEST",
            name: userState.avatarIndex,
            avatarUri: getAvatarUri(),
          });
          navigation.navigate("NameScreen", { fromScreen: fromScreen });
        }}
      />
      <View style={styles.bigRow}>
        <View style={styles.column}>
          <IconRow
            isExpand={expandGender}
            setExpand={setExpandGender}
            list={genders}
            current={gender}
            setCurrent={setGender}
          />
          <IconRow
            isExpand={expandSkin}
            setExpand={setExpandSkin}
            list={skins}
            current={skin}
            setCurrent={setSkin}
          />
          {gender === "boy" ? (
            <IconRow
              isExpand={expandShirt}
              setExpand={setExpandShirt}
              list={shirts}
              current={shirt}
              setCurrent={setShirt}
            />
          ) : (
            <IconRow
              isExpand={expandSweater}
              setExpand={setExpandSweater}
              list={sweaters}
              current={sweater}
              setCurrent={setSweater}
            />
          )}
          <IconRow
            isExpand={expandGlasses}
            setExpand={setExpandGlasses}
            list={glasseses}
            current={glasses}
            setCurrent={setGlasses}
          />
          {gender === "boy" ? (
            <IconRow
              isExpand={expandHat}
              setExpand={setExpandHat}
              list={hats}
              current={hat}
              setCurrent={setHat}
            />
          ) : null}
        </View>
        <Image style={styles.avatar} source={avatarImages[getAvatarUri()]} />
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  bigRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
    width: "100%",
  },
  icon: {
    width: 100,
    height: 100,
  },
  avatar: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
    marginRight: "20%",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    width: 320,
    marginLeft: 20
  },
  save: {
    height: 20,
  },
});
