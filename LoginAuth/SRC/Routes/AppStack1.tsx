import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../Screens/HomePage'
export type StackParamList = {
    Home: undefined
}

const stack = createStackNavigator<StackParamList>()

export const AppStack1 = () => {
  return (
    <stack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false
        }}
    >
        <stack.Screen name='Home' component={Home}/>
    </stack.Navigator>
  )
}
