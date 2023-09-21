import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppwriteContext, { AppContext } from '../Appwrite/AppwriteContext'
import Loading from '../Components/Loading'
import { AppStack1 } from './AppStack1'
import { AuthStack1 } from './AuthStack1'


export const route1 = () => {
    const [isLoading, SetisLoading] = useState<boolean>(true)
    const {appwrite, isLoggedIn, SetIsLoggedIn} = useContext(AppContext)

    useEffect(() => {
        appwrite
         .getUserAccount()
         .then(response => {
            SetisLoading(false)
            if(response) {
                SetIsLoggedIn(true)
            }
         })
    }, [appwrite, SetIsLoggedIn])
    
    if(isLoading) 
        return <Loading/>

  return (
    <NavigationContainer>
        {isLoggedIn ? <AppStack1/> : <AuthStack1/>}
    </NavigationContainer>
  )
}