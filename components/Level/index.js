import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import bg from '../image/bg.png'

export default function Level({ navigation, route }) {

    const { operator } = route.params;
    return (

        <View style={styles.game}>
            <ImageBackground source={bg} style={styles.gamePhoto} alt={''}>
                <View>
                    <Text style={styles.level}>Select difficulty level</Text>
                </View>
                <View style={styles.blocks}>
                    <View style={styles.operation}>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() =>
                                operator == '/' ? navigation.navigate('Game', { operator, maxNum: 2, level: 'Easy' })
                                    : navigation.navigate('Game', { operator, maxNum: 4, level: 'Easy' })}>
                            <View style={styles.planes}>
                                <View style={styles.plane}></View>
                                <View style={styles.plane}></View>
                                <View style={styles.plane1}></View>
                            </View>
                            <View style={styles.info}>
                            <Text style={styles.description1}>EASY LEVEL.</Text>
                            <Text style={styles.description}>
                            You have 60 seconds to solve the problems.{'\n'}
                            There are 4 numbers given for the operators +, -, or * (addition, subtraction, and multiplication). {'\n'}
                            However, if the operator is / (division), two numbers are given, which will only be single or two-digit numbers.
</Text>
</View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.operation1}>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() =>
                                operator == '/' ? navigation.navigate('Game', { operator, maxNum: 2, level: 'Normal' })
                                    :
                                    navigation.navigate('Game', { operator, maxNum: 6, level: 'Normal' })}>
                            <View style={styles.planes}>
                                <View style={styles.plane}></View>
                                <View style={styles.plane1}></View>
                                <View style={styles.plane1}></View>
                            </View>
                            <View style={styles.info}>
                            <Text style={styles.description1}>INTERMEDIATE LEVEL.</Text>
                            <Text style={styles.description}>
                            You have 60 seconds to solve the problems. {'\n'}
                            There are 6 numbers given for the operators +, -, or * (addition, subtraction, and multiplication). {'\n'}
                            However, if the operator is / (division), two numbers are given, which will only be two-digit or three-digit numbers.
       </Text>
        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.operation2}>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() =>
                                operator == '/' ? navigation.navigate('Game', { operator, maxNum: 2, level: 'Hard' })
                                    :
                                    navigation.navigate('Game', { operator, maxNum: 10, level: 'Hard' })}>
                            <View style={styles.planes}>
                                <View style={styles.plane1}></View>
                                <View style={styles.plane1}></View>
                                <View style={styles.plane1}></View>
                            </View>
                            <View style={styles.info}>
                            <Text style={styles.description1}>HARD LEVEL.</Text>
                            <Text style={styles.description}>
                            You have 60 seconds to solve the problems. {'\n'}
                            There are 10 numbers given for the operators +, -, or * (addition, subtraction, and multiplication). {'\n'}
                            However, if the operator is / (division), two numbers are given, which will only be three-digit or four-digit numbers.
        </Text>
        </View>
                        </TouchableOpacity>
                    </View>
                </View>
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
        width: '100%'
    },
    level: {
        color: '#69A000',
        textAlign: 'center',
        fontSize: 42,
        marginTop: 40,
    },
    block: {
        flex: 1,
        justifyContent: 'space-around',
        height: 120,
        width: '80%',
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderWidth: 1,
        borderColor: 'rgba(105, 160, 0, 1)',
        borderRadius: 25,
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: '5%',
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    operation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '40%',
    },
    operation1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '10%'
    },
    operation2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '30%'
    },
    planes: {
        height: 80,
        width: '20%',
        alignSelf: 'center'
    },
    plane: {
        flex: 1,
        justifyContent: 'flex-start',
        width: 60,
        borderWidth: 1,
        borderColor: 'rgba(105,160,0,1)',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '2%'
    },
    plane1: {
        flex: 1,
        justifyContent: 'flex-start',
        width: 60,
        backgroundColor: 'rgba(105,160,0,1)',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '2%'
    },
    description: {
        color: '#253502',
        textAlign: 'left',
        fontSize: 10,
    },
    description1: {
        color: '#253502',
        textAlign: 'left',
        fontSize: 11,
        fontWeight: 'bold'
    },
    info: {
        width: '70%'
    }
})

