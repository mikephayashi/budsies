import React, { useState, useEffect, useReducer } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
  BalsamiqSans_700Bold,
  BalsamiqSans_700Bold_Italic,
} from "@expo-google-fonts/balsamiq-sans";
import { Asset } from "expo-asset";
import Images from "./assets";
import { ImagesContext } from "./state/ImagesContext";

import StartScreen from "./screens/startScreen";
import HomeScreen from "./screens/homeScreen";
import CreateRoomScreen from "./screens/createRoomScreen";
import JoinRoomScreen from "./screens/joinRoomScreen";
import FindRoomScreen from "./screens/findRoomScreen";
import VideoRoomScreen from "./screens/videoRoomScreen";
import AvatarScreen from "./screens/avatarScreen";
import NameScreen from "./screens/nameScreen";
import ShowScreen from "./screens/showScreen";
import GameScreen from "./screens/gameScreen";
import GameShowScreen from "./screens/gameShowScreen";
import HTPScreen from "./screens/htpScreen";

import testReducer from "./state/TestReducer";
import CustomContext from "./state/CustomContext";
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  DropDownPicker.setMode("BADGE");
  const Stack = createStackNavigator();

  const [userState, usersDispatch] = useReducer(testReducer, {
    name: "",
    avatarUri: "",
    avatarProps: {gender: "boy", hat: "Grey", skin: "Tan", shirt: "White", sweater: "Pink", glasses: "Brown"}
  });

  const providerState = {
    userState,
    usersDispatch,
  };

  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
  });

  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const loadImages = async () => {
      // asset from Expo expects an array - check assets/index.js to see an example
      await Asset.loadAsync(Images);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  if (!fontsLoaded) {
    return <View />;
  }

  if (!imagesLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <CustomContext.Provider value={providerState}>
      <ImagesContext.Provider value={Images}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateRoom"
              component={CreateRoomScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JoinRoom"
              component={JoinRoomScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindRoom"
              component={FindRoomScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VideoRoom"
              component={VideoRoomScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AvatarScreen"
              component={AvatarScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NameScreen"
              component={NameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShowScreen"
              component={ShowScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GameScreen"
              component={GameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GameShowScreen"
              component={GameShowScreen}
              options={{ headerShown: false }}
            />
                        <Stack.Screen
              name="HTPScreen"
              component={HTPScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImagesContext.Provider>
    </CustomContext.Provider>
  );
}
