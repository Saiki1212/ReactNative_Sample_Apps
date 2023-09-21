import { View, Text } from 'react-native'
import React, { FC, createContext, useState } from 'react'
import { PropsWithChildren } from 'react';

import AppwriteSerive from './Service'
import { create } from 'react-test-renderer';

type AppContexttype = {
    appwrite : AppwriteSerive;
    isLoggedIn: boolean;
    SetIsLoggedIn: (isLoggedIn : boolean) => void
}

export const AppContext = createContext<AppContexttype>({
    appwrite : new AppwriteSerive(),
    isLoggedIn: false,
    SetIsLoggedIn: () => {}
})


const AppwriteContext :FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn, SetIsLoggedIn] = useState(false)
    const initaialValues = {
        appwrite : new AppwriteSerive(),
        isLoggedIn,
        SetIsLoggedIn,
    }
  return (
    <AppContext.Provider value={initaialValues}>
      {children}
    </AppContext.Provider>
  )
}
export { AppwriteContext };
export default AppwriteContext