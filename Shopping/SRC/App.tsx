import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native'

//Stack navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens   
import HomeScreen from './Screens/HomeScree'

import IphoneScreen from './Screens/IphoneScree'
import IphoneDetails from './Screens/IphoneDetails'

import MacBookScreen from './Screens/MacBookScree'
import MacBookDetails from './Screens/MacBookDetails'

import AirPodsScreen from './Screens/AirPodsScree'
import AirpodDetails from './Screens/AirpodDetails'

import IWatchScreen from './Screens/IWatchScree'
import IwatchDetails from './Screens/IwatchDetails'

export type StackListRaa = {
  Home: undefined
  AllAirpods : undefined
  Airpods : {product : AllProductsInterface}
  AllMacBooks : undefined
  MacBook : {product : AllProductsInterface}
  AllIphones : undefined
  Iphone : {product : AllProductsInterface}
  AllIwatches : undefined
  Iwatch : {product : AllProductsInterface}
}
const StackListCreating = createNativeStackNavigator<StackListRaa>()

const App = () => {
  return (
    <NavigationContainer>
      <StackListCreating.Navigator initialRouteName='Home'>
        <StackListCreating.Screen
          name='Home'
          component={HomeScreen}
        />
        <StackListCreating.Screen
          name='AllAirpods'
          component={AirPodsScreen}
        />
        <StackListCreating.Screen
          name='Airpods'
          component={AirpodDetails}
        />
        <StackListCreating.Screen
          name='AllIphones'
          component={IphoneScreen}
        />
        <StackListCreating.Screen
          name='Iphone'
          component={IphoneDetails}
        />
        <StackListCreating.Screen
          name='AllMacBooks'
          component={MacBookScreen}
        />
        <StackListCreating.Screen
          name='MacBook'
          component={MacBookDetails}
        />
        <StackListCreating.Screen
          name='AllIwatches'
          component={IWatchScreen}
        />
        <StackListCreating.Screen
          name='Iwatch'
          component={IwatchDetails}
        />
      </StackListCreating.Navigator>
    </NavigationContainer>
  )
}

export default App
