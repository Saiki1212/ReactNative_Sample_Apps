import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackListRaa } from '../App'
import ItemDetails from '../Components/ItemDetails'

type AirpodDetailsProps = NativeStackScreenProps<StackListRaa, 'Airpods'>

const AirpodDetails = ({route} : AirpodDetailsProps) => {
  const {product} = route.params
  return (
    <ItemDetails product={product}/>
  )
}

export default AirpodDetails

const styles = StyleSheet.create({})