import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SideScrollCards() {
  return (
    <View>
      <Text style = {styles.Heading}>SideScroll Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style = {[styles.Card, styles.Scrollcard]}>
            <Text style={styles.SizeOfText}>Hey😍</Text>
        </View>
        <View style = {[styles.Card, styles.Scrollcard]}>
            <Text style={styles.SizeOfText}>Sai</Text>
        </View>
        <View style = {[styles.Card, styles.Scrollcard]}>
            <Text style={styles.SizeOfText}>Kiran</Text>
        </View>
        <View style = {[styles.Card, styles.Scrollcard]}>
            <Text style={styles.SizeOfText}>Lets</Text>
        </View>
        <View style = {[styles.Card, styles.Scrollcard]}>
            <Text style={styles.SizeOfText}>Get</Text>
        </View>
        <View style = {[styles.Card, styles.Scrollcard]}>
            <Text style={styles.SizeOfText}>Scroll</Text>
        </View>
        <View style = {[styles.Card, styles.Scrollcard]}>
            <Text style={styles.SizeOfText}>To</Text>
        </View>
        <View style = {[styles.Card, styles.Scrollcard]}>
            <Text style={styles.SizeOfText}>Left</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    Heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 15
      },
      SizeOfText: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      container: {
        padding: 8
      },
      Card: {
        width: 200,
        height: 200,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 8
      },
      Scrollcard: {
        backgroundColor: '#CAD5F9',
        elevation: 10,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: '#EF5354',
        shadowOpacity: 0.9,
        shadowRadius: 5
      }
})