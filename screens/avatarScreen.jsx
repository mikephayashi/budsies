import React, { useState, useEffect, useContext } from "react";
import { Image, View, StyleSheet } from "react-native";
import NextButton from "../components/NextButton";
import BackgroundView from "../components/BackgroundView";
import { useCustomContext } from "../state/CustomContext";
import IconRow from "../components/IconRow";
import { ImagesContext, getImage } from "../state/ImagesContext";
import { addPlayer, updatePlayer } from "../FirebaseCalls";

export default function AvatarScreen({ navigation, route }) {
  const Images = useContext(ImagesContext);
  const fromVideoScreen = route.params.fromVideoScreen;
  const { userState, usersDispatch } = useCustomContext();
  const room = route.params.room;
  const userId = route.params.userId;

  const genders = {
    boy: Images[getImage("Boy_Button")],
    girl: Images[getImage("Girl_Button")],
  };

  const skins = {
    Light: Images[getImage("Light_Skin_Tone_Icon")],
    Tan: Images[getImage("Tan_Skin_Tone_Icon")],
    Golden: Images[getImage("Golden_Skin_Tone_Icon")],
  };

  const shirts = {
    White: Images[getImage("White_Shirt_Icon")],
    Blue: Images[getImage("Blue_Shirt_Icon")],
    Purple: Images[getImage("Purple_Shirt_Icon")],
  };

  const sweaters = {
    Pink: Images[getImage("Pink_Sweater_Icon")],
    Blue: Images[getImage("Blue_Sweater_Icon")],
    Grey: Images[getImage("Grey_Sweater_Icon")],
  };

  const glasseses = {
    Brown: Images[getImage("Brown_Glasses_Icon")],
    None: Images[getImage("No_Glasses_Icon")],
  };

  const hats = {
    Grey: Images[getImage("Grey_Hat_Icon")],
    None: Images[getImage("No_Hat_Icon")],
  };

  const [gender, setGender] = useState(userState.avatarProps.gender);
  const [hat, setHat] = useState(userState.avatarProps.hat);
  const [skin, setSkin] = useState(userState.avatarProps.skin);
  const [shirt, setShirt] = useState(userState.avatarProps.shirt);
  const [sweater, setSweater] = useState(userState.avatarProps.sweater);
  const [glasses, setGlasses] = useState(userState.avatarProps.glasses);

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
        callBack={async () => {
          await usersDispatch({
            type: "TEST",
            name: userState.name,
            avatarUri: getAvatarUri(),
            avatarProps: {
              gender: gender,
              hat: hat,
              skin: skin,
              shirt: shirt,
              sweater: sweater,
              glasses: glasses,
            },
          });
          if (fromVideoScreen) {
            await updatePlayer(room, {name: userState.name, avatarUri: getAvatarUri()}, userId);
            navigation.navigate("VideoRoom", { room: room, userId: userId });
          } else {
            const userIdNew = await addPlayer(room, {
              name: userState.name,
              avatarUri: getAvatarUri(),
            });
            navigation.navigate("VideoRoom", { room: room, userId: userIdNew });
          }
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
        <Image
          style={styles.avatar}
          source={Images[getImage(getAvatarUri())]}
        />
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
    // backgroundColor: "red",
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
    marginLeft: 20,
  },
  save: {
    height: 20,
  },
});
