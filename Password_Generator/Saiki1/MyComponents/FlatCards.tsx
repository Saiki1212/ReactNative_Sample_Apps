import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}> Lets Play </Text>
      </View>
      <Text style = {styles.Heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green😍</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HeaderContainer: {
    height:100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1b263b',
    backgroundColor: '#fffcf2',
    borderRadius: 50,
    margin: 10
  },
  Header: {
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 23,
    color: '#002855',
  },
  Heading: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15
  },
  container : {
    flex : 1,
    flexDirection: 'row',
    padding: 8
  }, 
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8
  },
  cardOne: {
    backgroundColor: '#EF5354'
  },
  cardTwo: {
    backgroundColor: '#50BDD4'
  },
  cardThree: {
    backgroundColor: '#5DA3FA'
  }
})