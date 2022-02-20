import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './screens/startScreen/startScreen';
import HomeScreen from './screens/homeScreen/homeScreen';

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Start" 
          component={HomeScreen}
          options={{
            // Custom Header Title
            title: 'Home Screen Custom Title',
          }}/>
        <Stack.Screen name="Screen2" component={Screen2}
          options={{
            // Custom Header Button
            headerRight: () => (
              <Button
                title="Alert"
                onPress={() => alert('Button Pressed')}
              />
            )
          }} 
        />
        <Stack.Screen name="Screen3" component={Screen3} />
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
