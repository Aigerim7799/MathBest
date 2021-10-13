import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Platform, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import bg from '../image/bg.png'

const Choice = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={bg} style={styles.gamePhoto} alt={''}>
        <View>
          <Text style={styles.level}>Choose one of  the options</Text>
        </View>
        <View style={styles.operations}>
          <View style={styles.operation}>
            <TouchableOpacity
              style={styles.randomNumber}
              onPress={() =>
                navigation.navigate('Level', { operator: '+' })}>
              <Text style={styles.plusMinus}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.randomNumber}
              onPress={() =>
                navigation.navigate('Level', { operator: '-' })}>
              <Text style={styles.plusMinus}>-</Text>

            </TouchableOpacity>
          </View>

          <View style={styles.operation1}>
            <TouchableOpacity
              style={styles.randomNumber}
              onPress={() =>
                navigation.navigate('Level', { operator: '*' })}>
              <Text style={styles.multi}>*</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.randomNumber}
              onPress={() =>
                navigation.navigate('Level', { operator: '/' })}>
              <Text style={styles.split}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Choice;

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

  operations: {
    marginTop: '5%',
    marginLeft: '10%',
    width: '80%'
  },
  operation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '50%',
  },
  operation1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '10%'
  },
  plusMinus: {
    fontSize: 120,
    color: 'orange',
    lineHeight: 120,
    alignSelf: 'center'
  },
  split: {
    fontSize: 100,
    color: 'orange',
    lineHeight: 120,
    alignSelf: 'center'
  },
  multi: {
    fontSize: 120,
    color: 'orange',
    lineHeight: 120,
    paddingTop:40
  },
  randomNumber: {
    flex: 1,
    justifyContent: 'center',
    width: 500,
    height: 140,
    backgroundColor: 'rgba(175,212,113,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(175,212,113,1)',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: '2%'
  },

})
