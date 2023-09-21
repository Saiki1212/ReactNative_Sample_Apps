import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackListRaa } from '../App'
import ItemDetails from '../Components/ItemDetails'

type watchDetailsProps = NativeStackScreenProps<StackListRaa, 'Iwatch'>

const IwatchDetails = ({route} : watchDetailsProps) => {
  const {product} = route.params
  return (
    <ItemDetails product={product} />
  )
}

export default IwatchDetails

const styles = StyleSheet.create({})