import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackList, 'Details'>


const DetailsPage = ({route}:DetailsProps) => {
    const {ID} = route.params
    const navigatuu = useNavigation<NativeStackNavigationProp<RootStackList>>()
  return (
    <View style = {styles.v1}>
      <Text style = {styles.t1}>ID from Home Page : {ID}</Text>
      <View style={styles.v2}>
        <Button
          title='Home'
          onPress={() => navigatuu.navigate('Home')}
          // onPress={() => navigatuu.goBack()}
          // onPress={() => navigatuu.popToTop()}
        />
        <Button
          title='Accounts'
          onPress={() => navigatuu.navigate('Account')}
          // onPress={() => navigatuu.goBack()}
          // onPress={() => navigatuu.popToTop()}
        />
      </View>
      
    </View>
  )
}

export default DetailsPage

const styles = StyleSheet.create({
    v1: {
        flex: 1,
        backgroundColor: '#9ec46a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    t1: {
        color: '#000'
    },
    v2: {
      width: 300,
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    // b1: {
    //     width: 100,
    //     height: 30,
    //     borderWidth: 2,
    //     borderRadius: 12
    // }
})