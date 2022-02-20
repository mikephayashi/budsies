import {View, Text, Button} from 'react-native';

export default function StartScreen() {
    return (
        <View>
            <Text>Start Screen</Text>
            <Button title="Go to Hom" onPress={() => navigation.navigate('Screen2')}/>
        </View>
    );
}