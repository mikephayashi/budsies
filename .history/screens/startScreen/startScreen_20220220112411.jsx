import {View, Text, Button} from 'react-native';

export default function StartScreen() {
    return (
        <View>
            <Text>Start Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    );
}