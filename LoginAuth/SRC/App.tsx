import React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/HomePage';
import LoginPage from './Screens/LoginPage';
import SignUpPage from './Screens/SignUpPage';
import {AuthStackParamList } from './Routes/AuthStack1';
import AppwriteContext, {AppContext} from './Appwrite/AppwriteContext';

export type StackParamList = {
  Home: undefined
  login: undefined
  signup: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

function App(): JSX.Element {
  return (
    <AppwriteContext>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='SignUp' component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppwriteContext>
    
  );
}



export default App;
