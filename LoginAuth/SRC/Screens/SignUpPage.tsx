import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'

import { FAB } from '@rneui/themed'
import Snackbar from 'react-native-snackbar'
import { AppContext } from '../Appwrite/AppwriteContext'
// import { StackParamList } from '../Routes/AppStack1'
import { AuthStackParamList } from '../Routes/AuthStack1'
import {NativeStackScreenProps}  from '@react-navigation/native-stack'

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>

const SignUpPage = ({navigation}: SignupScreenProps) => {
  const {appwrite, SetIsLoggedIn} = useContext(AppContext)

  const [error, SetError] = useState<string>('')
  const [name, SetName] = useState<string>('')
  const [email, SetEmail] = useState<string>('')
  const [password, SetPassword] = useState<string>('')
  const [RePassword, SetRePassword] = useState<string>('')

  const handleSignUp = () => {
    if(name.length < 1 || email.length < 1 || password.length < 1 || RePassword.length < 1 )
      SetError("All Fields are required")
    else if(password != RePassword) 
      SetError('Password does not Match')
    else {
      const User = {
        email,
        password,
        name
      }
      appwrite
        .CreateAccount(User)
        .then((response : any) => {
          if(response) {
            SetIsLoggedIn(true)
            Snackbar.show({
              text: 'SignUp Successful',
              duration: Snackbar.LENGTH_SHORT
            })
          }
        })
        .catch(e => {
          console.log(e)
          SetError(e.message)
        })
    }
  }

  return (
    <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.appName}>Appwrite Authentication</Text>
        {/* Name */}
        <TextInput
          value={name}
          onChangeText={text => {
            SetError('');
            SetName(text);
          }}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Name"
          style={styles.input}
        />

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

        {/* password */}
        <TextInput
          value={RePassword}
          onChangeText={text => {
            SetError('');
            SetRePassword(text);
          }}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Repeat Password"
          style={styles.input}
        />

          {/* Validating Error */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Signup button */}
          <Pressable
            onPress={handleSignUp}
            style={[styles.btn, {marginTop: error ? 10 : 20}]}>
            <Text style={styles.btnText}>Sign Up</Text>
          </Pressable>

          {/* Login navigation */}
          <Pressable
            onPress={() => navigation.navigate('Login')}
            style={styles.loginContainer}>
            <Text style={styles.haveAccountLabel}>
              Already have an account?{'  '}
              <Text style={styles.loginLabel}>Login</Text>
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
    marginTop: 10,

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
  loginContainer: {
    marginTop: 60,
  },
  haveAccountLabel: {
    color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginLabel: {
    color: '#1d9bf0',
  },
})

export default SignUpPage