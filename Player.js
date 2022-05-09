import * as React from 'react'
import { Button, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';

const Player = () => {
    const [sound, setSound] = React.useState();

    async function playSound() {
        // console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/IOS-Notification.mp3')
        );
        setSound(sound);
        // console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : playSound;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 10,
    },
});

export default Player
