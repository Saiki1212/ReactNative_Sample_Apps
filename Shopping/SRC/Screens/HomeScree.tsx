import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//react navigation
import { StackListRaa } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeProps = NativeStackScreenProps<StackListRaa, 'Home'>
       
const HomeScreen = ({navigation} : HomeProps) => {
  return (
    <View style={styles.v}>
      <View style={styles.v1}>
        <View style={styles.v2}>
          <Pressable onPress={() => navigation.push('AllIphones')} >
            <Image style={styles.image} source={{uri: 'https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg'}} />
          </Pressable>
          <Text style={styles.t1}>Apple Iphone</Text>
        </View>
        
      <View style={styles.v2}>
        <Pressable onPress={() => navigation.push('AllMacBooks')} >
          <Image style={styles.image} source={{uri: 'https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg'}} />
        </Pressable>
        <Text style={styles.t1}>MacBook</Text>
      </View>
        
      </View>
      <View style={styles.v1}>
        <View style={styles.v2}>
          <Pressable onPress={() => navigation.push('AllIwatches')} >
            <Image style={styles.image} source={{uri: 'https://m.media-amazon.com/images/I/719VSO+vgOL._SX679_.jpg'}} />
          </Pressable>
          <Text style={styles.t1}>Apple Watch</Text>
        </View>
       
       <View style={styles.v2}>
        <Pressable onPress={() => navigation.push('AllAirpods')} >
          <Image style={styles.image} source={{uri: 'https://m.media-amazon.com/images/I/61sRKTAfrhL._SX679_.jpg'}} />
        </Pressable>
        <Text style={styles.t1}>Apple AirPods</Text>
       </View>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  v: {
    flex : 1,
    justifyContent: 'center',
    backgroundColor: '#edeec9'
  },
  v1: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  v2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8
  },
  t1: {
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 10
  },
  image : {
    height: 170,
    width: 170,
    borderRadius: 8
  }
})

export default HomeScreen