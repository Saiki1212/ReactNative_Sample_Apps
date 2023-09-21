
import React, {PropsWithChildren}from 'react';
import { useState } from 'react'

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Pressable
} from 'react-native';

import One from '../asset/One.png'
import Two from '../asset/Two.png'
import Three from '../asset/Three.png'
import Four from '../asset/Four.png'
import Five from '../asset/Five.png'
import Six from '../asset/Six.png'

type DiceProperties = PropsWithChildren <{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl} : DiceProperties) :JSX.Element => {
  return(
    <View>
      <Image style={styles.DiceImage} source={imageUrl}></Image>
    </View>
  )
}

function App(): JSX.Element {
  const [DiceImage, setDiceImage] = useState<ImageSourcePropType>(Two)
  const [DiceImag, setDiceImag] = useState<ImageSourcePropType>(Two)
  const [BackGround, setBackGround] = useState('#a2d2ff')

  const RollTheDiceOnPress1 = () => {
    let ImageNumber = Math.floor(Math.random() * 6) + 1
    switch (ImageNumber) {
      case 1:
        setDiceImage(One)
        setBackGround('#cae9ff')
        break;
      case 2:
        setDiceImage(Two)
        setBackGround('#a2d2ff')
        break;
      case 3:
        setDiceImage(Three)
        setBackGround('#ffb3c6')
        break;
      case 4:
        setDiceImage(Four)
        setBackGround('#bee9e8')
        break;
      case 5:
        setDiceImage(Five)
        setBackGround('#a5a58d')
        break;
      case 6:
        setDiceImage(Six)
        setBackGround('#ffe5ec')
        break;
      default:
        break;
    }
  }
  const RollTheDiceOnPress2 = () => {
    let ImageNumber = Math.floor(Math.random() * 6) + 1
    switch (ImageNumber) {
      case 1:
        setDiceImag(One)
        setBackGround('#cae9ff')
        break;
      case 2:
        setDiceImag(Two)
        setBackGround('#a2d2ff')
        break;
      case 3:
        setDiceImag(Three)
        setBackGround('#ffb3c6')
        break;
      case 4:
        setDiceImag(Four)
        setBackGround('#bee9e8')
        break;
      case 5:
        setDiceImag(Five)
        setBackGround('#a5a58d')
        break;
      case 6:
        setDiceImag(Six)
        setBackGround('#ffe5ec')
        break;
      default:
        break;
    }
  }


  return (
    <>
    <StatusBar backgroundColor={'#a2c3ff'}></StatusBar>
    <View style={[styles.MainHeader, {backgroundColor : BackGround}]}>
       <View style={styles.HeaderView}>
          <Text style = {styles.Header}>Rolling Dice</Text>
      </View>
    </View>
   
    <View style={[styles.Container , {backgroundColor : BackGround}]}>
      <View style={styles.Container2}>
        <View style={styles.Container2_1}>
          <Dice imageUrl={DiceImage}></Dice>
          <Pressable onPress={RollTheDiceOnPress1}>
            <Text style={styles.BtnText}>Roll 1st Die</Text>
          </Pressable>
        </View>
        <View style={styles.Container2_2}>
          <Dice imageUrl={DiceImag}></Dice>
          <Pressable onPress={RollTheDiceOnPress2}>
            <Text style={styles.BtnText}>Roll 2nd Die</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable onPress={ RollTheDiceOnPress1} onPressIn={ RollTheDiceOnPress2}>
          <Text style={styles.BtnText}>Roll 2 Dice</Text>
        </Pressable>
      </View>
    </View>
    
    </>
    
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainHeader: {
    backgroundColor: '#a2d2ff',
    alignItems: 'center',
  },
  HeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 80,
    backgroundColor: '#a2d2df',
    borderRadius: 8,
    margin: 10
  },
  Header: {
    fontSize: 30,
    fontWeight: '800',
    color: '#03045e'
  },
  Container2: {
    flexDirection: 'row',
  },
  Container2_1: {
    margin: 10
  },
  Container2_2: {
    margin: 10
  },
  DiceImage: {
    height: 160,
    width: 160,
  },
  BtnText: {
    height: 50,
    width: 150,
    backgroundColor: '#023e8a',
    color: '#fca311',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
    paddingHorizontal: 32,
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#fca311',
    margin: 5
  },
});

export default App;
