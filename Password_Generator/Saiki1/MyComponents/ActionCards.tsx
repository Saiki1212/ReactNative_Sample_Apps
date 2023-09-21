import { StyleSheet, Text, View , Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function ActionCards() {
    function openWebsite(WebsiteLinkHere: string) {
        Linking.openURL(WebsiteLinkHere)
    }
  return (
    <View>
      <Text style={styles.Heading}>Mac Book</Text>
      <View style={styles.FullCard}>
        <View style={styles.Header1}>
            <Text style={styles.Header}>MacBook Air and Pro</Text>
        </View>
        
        <Image source = {{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHc8E57UAN2IytcuwUFajbt65IW9KOrmttkpbaC35c4buFTkrr7E1NNEwo2YiRFoI5HfA&usqp=CAU'
        }}
        style={styles.ImgCard}></Image>
        <View style={styles.DiscriptionView}>
            <Text style={styles.Discription}>              The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005.</Text>
        </View>
        <View style={styles.Final}>
            <TouchableOpacity onPress={() => openWebsite('https://www.apple.com/in/macbook-air-13-and-15-m2/')}>
                <Text style={styles.link}>Macbook Air</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.apple.com/in/macbook-pro-14-and-16/')}>
                <Text style={styles.link}>MacBook Pro</Text>
            </TouchableOpacity>
            
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Heading: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingHorizontal: 15,
        marginBottom: 10
    },
    FullCard: {
        height: 530,
        backgroundColor: '#6c757d',
        margin: 20,
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowColor: '#000000'
    },
    Header1: {  
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8
    },
    Header: {
        fontSize: 18, 
        fontWeight: 'bold'
    },
    ImgCard: {
        height: 250,
        margin: 12,
        borderRadius: 5
    },
    DiscriptionView: {
        paddingLeft: 15,
        marginTop: 20,
        fontStyle:'italic'
    },
    Discription : {
        fontSize: 15,
        color: '#000000',
        fontStyle:'italic',
    },
    Final: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
        
    },
    link : {
        fontSize: 15,
        color: '#4BBBEC'
    }
})