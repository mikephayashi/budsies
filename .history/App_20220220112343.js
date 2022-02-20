import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './screens/startScreen/startScreen';
import HomeScreen from './screens/homeScreen/homeScreen';

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
        
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
