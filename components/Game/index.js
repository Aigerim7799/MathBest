import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import bg from '../image/bg1.png'
import { Audio } from 'expo-av';

const padTime = (time) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = (time) => {
  const minutes = Math.floor(time / 600);
  const seconds = time % 60;
  return `${minutes}:${padTime(seconds)}`;
};

export default function Game({ navigation, route }) {
  const { operator, maxNum, level } = route.params

  const [counter, setCounter] = useState(60);
  const [data, setData] = useState([])
  const [num, setNum] = useState(0)
  const [check, setCheck] = useState('')
  const [music, setMusic] = useState()
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

  useEffect(() => {
    return music
      ? () => {music.unloadAsync();}
      : undefined;
  }, [music]);

  let arr = []

  const MinusEasy= ()=>{
    arr=[]
  
    let numberOne=Math.floor(Math.random() * (100 - 90)) + 90;
    let numberTwo=Math.floor(Math.random() * (30 - 20)) + 20;
    let numberThree=Math.floor(Math.random() * (30- 20)) + 20;
    let numberFour=Math.floor(Math.random() * (30- 20)) + 10;
    
  
    setData([numberOne,numberTwo,numberThree,numberFour]) 
  }
  

  const MinusHard = () => {
    arr = []

    let numberOne = Math.floor(Math.random() * (1000 - 450)) + 450;
    let numberTwo = Math.floor(Math.random() * (100 - 30)) + 20;
    let numberThree = Math.floor(Math.random() * (100 - 30)) + 20;
    let numberFour = Math.floor(Math.random() * (100 - 20)) + 20;
    let numberFive = Math.floor(Math.random() * (100 - 30)) + 20;
    let numberSix = Math.floor(Math.random() * (100 - 30)) + 20;
    let numberSeven = Math.floor(Math.random() * (100 - 30)) + 20;
    let numberEight = Math.floor(Math.random() * (100 - 30)) + 20;
    let numberNine = Math.floor(Math.random() * (100 - 30)) + 20;
    let numberTen = Math.floor(Math.random() * (100 - 30)) + 20;
    setData([numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberTen])
  }

  const MinusNormal= ()=>{
    arr=[]
  
    let numberOne=Math.floor(Math.random() * (500 - 450)) + 450;
    let numberTwo=Math.floor(Math.random() * (100 - 20)) + 20;
    let numberThree=Math.floor(Math.random() * (100- 20)) + 20;
    let numberFour=Math.floor(Math.random() * (100- 20)) + 20;
    let numberFive=Math.floor(Math.random() * (100- 20)) + 20;
    let numberSix=Math.floor(Math.random() * (100- 20)) + 20;
  
    setData([numberOne,numberTwo,numberThree,numberFour,numberFive,numberSix])
  }
  

  const DivideEasy = () => {

    var int1 = Math.floor((Math.random() * 99) + 10);
    var int2 = Math.floor((Math.random() * 9) + 2);
    if (int1 % int2 === 0) {
      setData([int1, int2])
    } else {
      DivideEasy()
    }
  }

  const DivideNormal = () => {
    let int1 = Math.floor((Math.random() * 999) + 10);
    let int2 = Math.floor((Math.random() * 20) + 2);
    debugger
    if (int1 % int2 === 0) {
      setData([int1, int2])
    } else {
      DivideNormal()
    }
  }

  const DivideHard = () => {
    let int1 = Math.floor((Math.random() * 9999) + 10);
    let int2 = Math.floor((Math.random() * 90) + 2);
    if (int1 % int2 === 0) {
      setData([int1, int2])
    } else {
      DivideHard()
    }
  }

  const changeMinus = () => {
    arr = []
    if (operator == '-' && level == 'Easy') MinusEasy()
    if (operator == '-' && level == 'Normal') MinusNormal()
    if (operator == '-' && level == 'Hard') MinusHard()
    setCheck('')
    setNum(0)
  }

  const changeDivide = () => {
    arr = []
    if (operator == '/' && level == 'Easy') DivideEasy()
    if (operator == '/' && level == 'Normal') DivideNormal()
    if (operator == '/' && level == 'Hard') DivideHard()
    setCheck('')
    setNum(0)
  }
  const changePlus = () => {
    arr = []
    for (let i = 0; i < maxNum; i++) {
      arr.push(Math.floor(Math.random() * 99))
      setData([...arr])
      setCheck('')
    }
    setNum(0)
  }

  const changeMulty = () => {
    arr = []
    for (let i = 0; i < maxNum; i++) {
      arr.push(Math.floor(Math.random() * 10) + 1)
      setData([...arr])
    }
    setNum(0)
  }

  let summ
  if (operator === '+' || operator === '-') summ = 0
  else summ = 1;

  
if(operator == '+'){
  arr = []
  for (let i = 0; i < data.length; i++) {
    summ+=data[i]
  }
}
if(operator == '*'){
  arr = []
  for (let i = 0; i < data.length; i++) {
    summ*=data[i]
  }
} 
if(operator =='/'){
 summ=Number(data[0]/data[1])
}
if(operator == '-' && level=='Easy'){
   summ=data[0]-data[1]-data[2]-data[3]
}
if(operator == '-' && level=='Normal'){
  summ=data[0]-data[1]-data[2]-data[3]-data[4]-data[5]
}
if(operator == '-' && level=='Hard'){
  summ=data[0]-data[1]-data[2]-data[3]-data[4]-data[5]-data[6]-data[7]-data[8]-data[9]
}

  const nextNum = () => {
    num == maxNum ? alert('vse') : setNum(num + 1)
  }


  const proverka = () => {
    if (check == summ) {
      trueSound()
      setCount(count + 1)
    }
    else falseSound()
    if (operator == '+') changePlus()
    if (operator == '*') changeMulty()
    changeDivide()
    changeMinus()
  }

  useEffect(() => {
    if (operator == '+') changePlus()
    if (operator == '*') changeMulty()
    changeDivide()
    changeMinus()
  }, [])

  const trueSound = () => {

    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
        require('./player/true.mp3')
      );
      setMusic(sound && sound);
      await sound.playAsync();
    }
    playSound()

  }
  const falseSound = () => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
        require('./player/false.mp3')
      );
      setMusic(sound && sound);

      await sound.playAsync();
    }
    playSound()
  }
  return (

    <View style={styles.game}>
      <ImageBackground source={bg} style={styles.gamePhoto} alt={''}>
        <View style={styles.textLevel}>
          <Text style={styles.level}>{level} level</Text>
          <Text style={styles.option}>{operator}</Text>
          <View className="App">
            <Text style={styles.second}>{counter === 0 ? navigation.navigate('Result', { operator, level, score: count }) : `${format(counter)} seconds left`}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.score}>Score: {count}</Text>
        </View>

        {
          num == maxNum ?

            <>
              <TextInput keyboardType="numeric" onChangeText={text => setCheck(text)} value={check} style={check == [] ? styles.randomNumber : check == summ ? styles.randomNumber : styles.randomNumber} 
                  editable={true}
              />
              <TouchableOpacity onPress={() => proverka()} style={styles.next}>
                <Text style={styles.nextText} >
                  Check
                </Text>
              </TouchableOpacity>
            </>
            :
            <>
              <TextInput type="text" style={styles.randomNumber} value={String(data[num])} editable={false}/>
              <TouchableOpacity onPress={() => nextNum()} style={styles.next}>
                <Text style={styles.nextText} >
                  Next number
                </Text>
              </TouchableOpacity>
            </>
        }
        
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
    marginTop: '4%'
  },
  level: {
    color: '#69A000',
    fontSize: 32,
    lineHeight: 32,
    width: '100%',
    textAlign: 'center'
  },
  option: {
    color: 'red',
    fontSize: 70,
    textAlign: 'center',
    paddingTop: '2%',
    lineHeight: 70
  },
  second: {
    color: '#0186BF',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 18,
    marginTop: '1%',
    width: '100%'
  },
  randomNumber: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(196, 233, 248, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(196, 233, 248,1)',
    borderRadius: 25,
    marginBottom: '5%',
    fontSize: 40,
    lineHeight: 40,
    color: 'orange',
    alignSelf: 'center',
    textAlign: 'center'
  },
  seven: {
    width: 100,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  next: {
    alignSelf: 'center',
    width: 300,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#C4E9F8',
    marginBottom: '43%'
  },
  nextText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
  },
  score: {
    color: 'transparent'
  }
})











