import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackList, 'Home'>

const HomePage = ({navigation}: HomeProps) => {
  return (
    <View style = {styles.v1}>
      
      <Text style = {styles.t1}>Home Page</Text>
      <View style = {styles.v2}>
        <Button
          title='Details'
            // onPress={() => navigation.navigate('Details', {ID: 'jhgfvjhdfj'})}

            onPress={() => navigation.push('Details', {ID: 'Saiki1212'})}
        />
        <Button
          title='Account'
            // onPress={() => navigation.navigate('Details', {ID: 'jhgfvjhdfj'})}

            onPress={() => navigation.push('Account')}
        />
      </View>
      
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    v1: {
        flex: 1,
        backgroundColor: '#e9c46a',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row'
    },
    t1: {
        color: '#000',
        fontWeight: '600',
        fontSize: 20
    },
    v2: {
      width: 300,
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
    // b1: {
    //     width: 100,
    //     height: 30,
    //     borderWidth: 2,
    //     borderRadius: 12
    // }
})