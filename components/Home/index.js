import { useNavigation } from '@react-navigation/core'
import {ScaledSheet} from 'react-native-size-matters'
import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Platform, } from 'react-native'
import mainPage from '../image/Mainpage.png'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={mainPage}
        style={styles.img}
        alt={''}>
        <View style={styles.block}>
        <Text style={styles.MATHGAME}>MATHGAME</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Choice')
          }
        >
          <Text style={styles.start}>START</Text>
        </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    
  },
  block:{
    alignSelf:'center'
  },
  img: {
    height: '100%',
    width: '100%'
  },
  MATHGAME: {
    fontSize: 46,
    marginTop: (Platform.OS === 'ios') ? '350@ms' : '85%',
    textAlign: 'center',
    color: '#AFD471',
  },
  button: {
    width: 100,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: '#AFD471',
    borderWidth: 3,
    textAlign: 'center',
    alignSelf:'center'
  },
  start: {
    color: '#AFD471',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 22
  }
});