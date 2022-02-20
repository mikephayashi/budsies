import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from './screens/startScreen';
import HomeScreen from './screens/homeScreen';
import GeneralScreen from './screens/createRoom/generalScreenhomeScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
<NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="General" component={GeneralScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
