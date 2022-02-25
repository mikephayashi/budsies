import React, {useReducer} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/startScreen";
import HomeScreen from "./screens/homeScreen";
import CreateRoomScreen from './screens/createRoomScreen';
import JoinRoomScreen from './screens/joinRoomScreen';
import VideoRoomScreen from './screens/videoRoomScreen';
import testReducer from './state/TestReducer';
import CustomContext from './state/CustomContext';
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  DropDownPicker.setMode("BADGE");
  const Stack = createStackNavigator();

const [userState, usersDispatch] = useReducer(testReducer, false);

  const providerState = {
    userState,
    usersDispatch,
  };

  return (
    <CustomContext.Provider value={providerState}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
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
        </Stack.Navigator>
      </NavigationContainer>
    </CustomContext.Provider>
  );
}