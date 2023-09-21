import { StyleSheet, FlatList, Button, Dimensions, View, Pressable } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window')
// const {height} = Dimensions.get('screen')

//react navigation
import { StackListRaa } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProductItem from '../Components/ProductItem'
import Separator from '../Components/Separator'
import { MacBook_List } from '../Data/MacBookConstantsList'

type MacProps = NativeStackScreenProps<StackListRaa,'AllMacBooks'>

const MacBookScreen = ({navigation} : MacProps) => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={MacBook_List}
        keyExtractor={anItem => anItem.ID}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('MacBook', {product: item})
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
    backgroundColor: '#fff',
  }, 
  V1: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-around',
    backgroundColor: '#F6FFFF'
  }
})

export default MacBookScreen