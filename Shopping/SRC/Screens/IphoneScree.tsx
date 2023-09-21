import { FlatList, Pressable, StyleSheet, Button, View, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window')

//react navigation
import { StackListRaa } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProductItem from '../Components/ProductItem'
import Separator from '../Components/Separator'
import { Iphone_List } from '../Data/IphoneConstantList'

type IScreenProps = NativeStackScreenProps<StackListRaa, 'AllIphones'>

const IphoneScreen = ({navigation} : IScreenProps) => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={Iphone_List}
        keyExtractor={anItem => anItem.ID}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Iphone', {product: item})
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
          title='AirPods'
          onPress={() => {navigation.navigate('AllAirpods')}}
        />
        <Button
          title='Macbook'
          onPress={() => {navigation.navigate('AllMacBooks')}}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    backgroundColor: '#F6FFFF'
  }
})

export default IphoneScreen