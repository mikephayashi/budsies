import {View, Text, Button} from 'react-native';

export default function StartScreen() {
    return (
        <View>
            <Text>Start Screen</Text>
            <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')}/>
        </View>
    );
}