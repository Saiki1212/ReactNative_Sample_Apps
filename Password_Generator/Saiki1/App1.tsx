import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './MyComponents/FlatCards'
import SideScrollCards from './MyComponents/SideScrollCards'
import FansyCards from './MyComponents/FansyCards'
import ActionCards from './MyComponents/ActionCards'
import ContactDetails from './MyComponents/ContactDetails'

const App1 = () => {
  return (
    <SafeAreaView>
        <ScrollView horizontal={false}>
            <FlatCards />
            <SideScrollCards />
            <FansyCards />
            <ActionCards />
            <ContactDetails />
        </ScrollView>
    </SafeAreaView>
  )
}

export default App1