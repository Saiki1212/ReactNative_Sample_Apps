import { StyleSheet, Button, Text, View } from 'react-native'
import React from 'react'
import { RootStackList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type AccountProps = NativeStackScreenProps<RootStackList, 'Account'>

const AccountPage = ({navigation}: AccountProps) => {
  return (
    <View style = {styles.v1}>
      
      <Text style = {styles.t1}>Account Page</Text>
      <View style = {styles.v2}>
        <Button
          title='Details'
            // onPress={() => navigation.navigate('Details', {ID: 'jhgfvjhdfj'})}

            onPress={() => navigation.push('Details', {ID: 'Saiki1212'})}
        />
        <Button
          title='Home'
            // onPress={() => navigation.navigate('Details', {ID: 'jhgfvjhdfj'})}

            onPress={() => navigation.push('Home')}
        />
        <Button
            title='To Top'
            onPress={() => navigation.popToTop()}
        />
      </View>
      
    </View>
  )
}

export default AccountPage

const styles = StyleSheet.create({
    v1: {
        flex: 1,
        backgroundColor: '#ec94a6',
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
})