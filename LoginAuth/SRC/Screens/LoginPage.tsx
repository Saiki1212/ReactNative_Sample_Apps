import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'

import { FAB } from '@rneui/themed'
import Snackbar from 'react-native-snackbar'
import { AppContext } from '../Appwrite/AppwriteContext'
// import { StackParamList } from '../Routes/AppStack1'
import { AuthStackParamList } from '../Routes/AuthStack1'
import {NativeStackScreenProps}  from '@react-navigation/native-stack'

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>

const LoginPage = ({navigation}: LoginScreenProps) => {

  const {appwrite, SetIsLoggedIn} = useContext(AppContext)
  const [error, SetError] = useState<string>('')
  const [email, SetEmail] = useState<string>('')
  const [password, SetPassword] = useState<string>('')

  const handleLogin = ()=> {
    if(email.length < 1 || password.length < 1)
      SetError('All fields are Required')
    else {
      const User = {
        email,
        password
      }
      appwrite
        .LoginAccount(User)
        .then((response : any) => {
          if(response) {
            SetIsLoggedIn(true)
            Snackbar.show({
              text: 'Login Successful',
              duration: Snackbar.LENGTH_SHORT
            })
          }
        })
        .catch( e => {
          console.log(e)
          SetError(e.message)
        })
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style ={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.appName}>Appwrite Authentication</Text>

        {/* Email */}
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={text => {
            SetError('');
            SetEmail(text);
          }}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Email"
          style={styles.input}
        />

        {/* password */}
        <TextInput
          value={password}
          onChangeText={text => {
            SetError('');
            SetPassword(text);
          }}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Password"
          style={styles.input}
        />

        {/* Error Validation  */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Pressable
            onPress={handleLogin}
            style={[styles.btn, {marginTop: error ? 10 : 20}]}>
            <Text style={styles.btnText}>Login</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signUpContainer}
        >
          <Text style={styles.noAccountLabel}>
            Don't have an Account
            <Text style={styles.signUpLabel}>Create an Account</Text>
          </Text>
        </Pressable>

      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  appName: {
    color: '#f02e65',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fef8fa',
    padding: 10,
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,

    width: '80%',
    color: '#000000',

    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 1,
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#ffffff',
    padding: 10,
    height: 45,

    alignSelf: 'center',
    borderRadius: 5,
    width: '80%',
    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },
  btnText: {
    color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpContainer: {
    marginTop: 80,
  },
  noAccountLabel: {
    color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  signUpLabel: {
    color: '#1d9bf0',
  },
})

export default LoginPage