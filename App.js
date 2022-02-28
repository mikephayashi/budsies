import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "./screens/startScreen";
import HomeScreen from "./screens/homeScreen";
import CreateRoomScreen from "./screens/createRoomScreen";
import JoinRoomScreen from "./screens/joinRoomScreen";
import VideoRoomScreen from "./screens/videoRoomScreen";
import AvatarScreen from "./screens/avatarScreen";
import NameScreen from "./screens/nameScreen";
import ShowScreen from "./screens/showScreen";
import GameScreen from "./screens/gameScreen";

import testReducer from "./state/TestReducer";
import CustomContext from "./state/CustomContext";
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  DropDownPicker.setMode("BADGE");
  const Stack = createStackNavigator();

  const [userState, usersDispatch] = useReducer(testReducer, {name: "", avatarUri: ""});

  const providerState = {
    userState,
    usersDispatch,
  };

  return (
    <CustomContext.Provider value={providerState}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </CustomContext.Provider>
  );
}
