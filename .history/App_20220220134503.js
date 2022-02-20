import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from './screens/startScreen';
import HomeScreen from './screens/homeScreen';
import GeneralScreen from './screens/createRoom/generalScreen';

export default function App() {
  const Stack = createStackNavigator();

  const [userState, usersDispatch ] = React.useReducer(tableReducer, []);

  const providerState = {
    userState,
    usersDispatch
  }

  return (
    <CustomContext.Provider value={providerState} >
    <ChildComponent /> //Any component within here can access value by using useCustomContext();
  </CustomContext.Provider>

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
