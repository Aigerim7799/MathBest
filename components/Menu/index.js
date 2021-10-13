import React, { useState, useEffect } from 'react'
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { Audio } from 'expo-av';
import bg from '../image/bg3.png'


export default function DrawerContent({ navigation }) {
    const [sound, setSound] = useState(false);
    const [music, setMusic] = useState(false)


    useEffect(() => {
        playSound()
    }, [])

    async function playSound() {

        const { sound } = await Audio.Sound.createAsync(
            require('./playBg.mp3')
        );
        setMusic(sound && sound);

        await sound.playAsync();
        setSound(true)

    }

    const pauseMusic = async () => {
        setSound(false)
        if (music !== null) {
            await music?.pauseAsync()
        }
    }

    return (
        <View style={styles.game}>
        
            <ImageBackground source={bg} style={styles.gamePhoto} alt={''}>
                <Text style={styles.menu}>Menu</Text>
                <View style={styles.settings}>
                    <Checkbox
                        value={sound}
                        status={sound ? 'checked' : 'unchecked'}
                        onPress={sound ? pauseMusic : playSound}
                        sound={sound ? '#4630EB' : '#000'}
                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                        color='green'
                    />
                    <Text style={styles.settingsText} >Sound On/Off</Text>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Choice')
                    }>
                    <Text
                        style={styles.exit}
                    > -   Go to main menu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Home')
                    }>
                    <Text
                        style={styles.exit}
                    > -   Close menu</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({
    game: {
        flex: 1,
    },
    gamePhoto: {
        height: '100%',
        width: '100%',
    },
    menu: {
        color: '#4D7205',
        marginTop: '20%',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
    },
    settingsText: {
        color: '#4D7205',
        lineHeight: 37,
        fontSize: 20
    },
    settings: {
        marginTop: '5%',
        marginLeft: '7%',
        flexDirection: 'row',

    },
    exit: {
        color: '#4D7205',
        marginTop: '5%',
        marginLeft: '9%',
        fontSize: 20
    },
})

