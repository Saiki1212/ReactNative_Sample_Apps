import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignUpPage from '../Screens/SignUpPage'
import LoginPage from '../Screens/LoginPage'

export type AuthStackParamList = {
    Login: undefined
    SignUp: undefined
    Home: undefined
}

const stack = createStackNavigator<AuthStackParamList>()

export const AuthStack1 = () => {
  return (
    <stack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false
        }}
    >
        <stack.Screen name='Login' component={LoginPage}/>
        <stack.Screen name='SignUp' component={SignUpPage}/>
    </stack.Navigator>
  )
}
