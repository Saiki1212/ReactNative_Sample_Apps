import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window')

//navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackListRaa } from '../App'
import ItemDetails from '../Components/ItemDetails'

type IDetails = NativeStackScreenProps<StackListRaa, 'Iphone'>


const IphoneDetails = ({route} : IDetails) => {
  const {product} = route.params

  return (
    <ItemDetails product={product} />
  )
}


export default IphoneDetails

