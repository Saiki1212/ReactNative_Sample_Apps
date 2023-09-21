import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FansyCards() {
  return (
    <View>
      <Text style={styles.Heading}>Trending places</Text>
      <View style={styles.ForAllCard}>
        <Image source={{
            uri: 'data:image/jpeg;base64,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'
        }} style={styles.CardImage} />
        <View style={styles.CardBody}>
            <Text style={styles.CardTitle}>Red Rocks</Text>
            <Text style={styles.CardLable}>Grand Canyon, USA</Text>
            <Text style={styles.CardDiscription}>      Join us for a journey to some of the most beautiful places in the world, like the red rocks of the Grand Canyon and the abundantly colorful Great Barrier Reef.</Text>
            <Text style={styles.CardFooter}>100KM Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 15
      },
    CardBody: {
        marginLeft: 12,
    },
    CardTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#bf0603',
        marginTop: 10,
        marginBottom: 3
    },
    CardLable: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 20
    },
    CardDiscription: {
        fontSize: 15,
        color: '#565264',
        marginBottom: 15,
        fontStyle: 'italic'
    },
    CardFooter: {
        fontSize: 13,
        marginLeft: 280
    },
    ForAllCard: {
        height: 500,
        borderRadius: 5,
        margin: 20,
        marginVertical: 15,
        backgroundColor: '#ced4da',
        elevation: 3,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowRadius: 15,
        shadowOpacity:1,
        shadowColor: '#001427',
        borderColor: '#1b4965',
        borderWidth: 1
    },
    CardImage: {
        height: 250,
        margin: 10,
        marginTop: 17,
        borderRadius: 5
    }
})