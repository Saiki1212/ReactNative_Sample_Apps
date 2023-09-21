import React from 'react';
import type {PropsWithChildren} from 'react';
//Navigation.....
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens.....
import HomePage from './Screens/Home';
import DetailsPage from './Screens/Details';
import AccountPage from './Screens/Account';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type RootStackList = {
  Home : undefined
  Details : {ID : string}
  Account : undefined
}

const Stack = createNativeStackNavigator<RootStackList>()

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home'
          component={HomePage}
          options={{title : "Home Page Title View"}}
        />
        <Stack.Screen 
          name='Details'
          component={DetailsPage}
          options={{title : "Details Page Title View"}}
        />
        <Stack.Screen 
          name='Account'
          component={AccountPage}
          options={{title : "Account Page Title View"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
