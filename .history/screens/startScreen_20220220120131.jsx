import {View, Text, Button} from 'react-native';

export default function StartScreen({item, navigation}) {
    return (
        <View>
            <Text>Start Screen</Text>
            <Button style={"margin-top: 50px;"} title="Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    );
}