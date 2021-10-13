import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import bg from '../image/bg1.png'



export default function Result({ navigation, route }) {
  const { operator, level, score } = route.params
  return (

    <View style={styles.game}>
      <ImageBackground source={bg} style={styles.gamePhoto} alt={''}>
        <View style={styles.textLevel}>
          <Text style={styles.level}>{level} level</Text>
          <Text style={styles.option}>{operator}</Text>
          <Text style={styles.score}>Your result is</Text>
          <Text style={styles.score1}>{score}</Text>
        </View>

        <View style={styles.text}>
          <TouchableOpacity style={styles.next}
            onPress={() =>
              navigation.navigate('Choice')
            }>
            <Text style={styles.nextText}>TRY AGAIN</Text>
          </TouchableOpacity>
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
  textLevel: {
    width: '100%',
    flexDirection: 'column',
    marginTop: '10%'
  },
  level: {
    color: '#69A000',
    fontSize: 38,
    width: '100%',
    textAlign: 'center'
  },
  option: {
    color: 'red',
    fontSize: 40,
    textAlign: 'center',
    paddingTop: '2%'
  },
  score: {
    color: '#0186BF',
    textAlign: 'center',
    fontSize: 22,
    marginTop: '2%',
    width: '100%'
  },
  score1: {
    color: 'red',
    textAlign: 'center',
    fontSize: 120,
    fontWeight: 'bold',
    marginTop: '2%',
    width: '100%',
    lineHeight: 120
  },
  next: {
    width: 300,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#C4E9F8',
    marginTop: '2%',
    alignSelf: 'center'
  },
  nextText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
})

