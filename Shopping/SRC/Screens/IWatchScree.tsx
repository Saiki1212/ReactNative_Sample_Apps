import { FlatList, Pressable, StyleSheet, Button, View, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window')

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProductItem from '../Components/ProductItem'
import { StackListRaa } from '../App'
import { IWatch_List } from '../Data/IWatcConstantsList'
import Separator from '../Components/Separator'

type watchProps = NativeStackScreenProps<StackListRaa, 'AllIwatches'>

const IWatchScreen = ({navigation} : watchProps) => {
  return (
    <View style={styles.container}>
      
      <FlatList 
        data={IWatch_List}
        keyExtractor={item => item.ID}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Iwatch', {product: item})
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
          title='Airpods'
          onPress={() => {navigation.navigate('AllAirpods')}}
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
    flexDirection: 'row',
    width : width,
    justifyContent: 'space-around',
    backgroundColor: '#F6FFFF'
  }
})

export default IWatchScreen
