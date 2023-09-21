import { Button, Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window')

import { StackListRaa } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProductItem from '../Components/ProductItem'
import Separator from '../Components/Separator'
import { Airpods_List } from '../Data/AirpodsConstantList'

type AirpodsProps = NativeStackScreenProps<StackListRaa, 'AllAirpods'>

const AirPodsScreen = ({navigation}: AirpodsProps) => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={Airpods_List}
        keyExtractor={item => item.ID}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Airpods', {product: item})
            }}
          >
            <ProductItem product={item}/>
          </Pressable>
        )}
      />
      <View style={styles.V1}>
      <Button
          title='Home'
          onPress={() => {navigation.navigate('Home')}}
        />
        <Button
          title='Laptops'
          onPress={() => {navigation.navigate('AllMacBooks')}}
        />
        <Button
          title='Phones'
          onPress={() => {navigation.navigate('AllIphones')}}
        />
        <Button
          title='Watch'
          onPress={() => {navigation.navigate('AllIwatches')}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#ffffff'
  },
  V1: {
    backgroundColor: '#F6FFFF',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: width
  }
})

export default AirPodsScreen
