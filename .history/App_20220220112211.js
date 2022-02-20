import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator
        screenOptions= {{
          // Custom Header Styles
          headerStyle: {
            backgroundColor: '#87CEEB',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
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
