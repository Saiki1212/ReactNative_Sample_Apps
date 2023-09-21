import { StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native'
import React, {PropsWithChildren} from 'react'

const {width} = Dimensions.get('window')

type detailsProps = PropsWithChildren<{
    product : AllProductsInterface
}>

const ItemDetails = ({product}: detailsProps) => {
  return (
    
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.image } source={{uri : product.Imageurl}} />
        <View style={styles.v1}>
          <Text style={styles.name}>{product.Name}</Text>
          <View style={[styles.rowContainer, styles.ratingContainer]}>
              <View style={styles.rating}>
                  <Text style={styles.ratingText}>{product.Rating}★</Text>
              </View>
              <Text style={styles.ratingCount}>
                  {product.RatingCount.toLocaleString()}
              </Text>
          </View>
          <View style={[styles.rowContainer, styles.priceContainer]}>
              <Text style={styles.originalPrice}>
                  ₹{product.OriginalPrice.toLocaleString()}
              </Text>
              <Text style={styles.discountPrice}>
                  ₹{product.DiscountPrice.toLocaleString()}
              </Text>
              <Text style={styles.offerPercentage}>
                  {product.OfferPercentage}↓ off
              </Text>
          </View>
          {product.tags.map((tag, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.tagBadge}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
      },
      image: {
        height: 450,
        width: width,
        resizeMode: 'contain'
      },
      v1: {
        paddingLeft: 12
      },
      rowContainer: {
        // marginTop: 8,
        flexDirection: 'row'
      },
      name: {
        fontSize: 18,
        fontWeight: '800',
        color: '#343a40',
        marginTop: 8
      },
      ratingContainer: {
        marginVertical: 10,
      },
      priceContainer: {
        backgroundColor: '#deffeb',
        marginBottom: 10,
        borderRadius: 3,
        padding : 8,
        marginRight: 12
      },
      rating: {
        borderRadius: 4,
        backgroundColor: '#008c00',
        paddingHorizontal: 6,
        justifyContent: 'center',
      },
      ratingText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15
      },
      ratingCount: {
        fontSize: 13,
        fontWeight: '400',
        color: '#0077b6',
        marginLeft: 8
      },
      originalPrice: {
        fontSize: 20,
        fontWeight: '700',
        textDecorationLine: 'line-through'
      },
      discountPrice: {
        marginLeft: 12,
        fontSize: 20,
        fontWeight: '800',
        color: '#000'
      },
      offerPercentage: {
        marginLeft: 12,
        fontSize: 19,
        fontWeight: '600',
        color: '#548c2f'
      },
      badge: {
        flexWrap: 'wrap',
        margin: 4,
      },
      tagBadge: {
        borderWidth: 0.4,
        paddingVertical: 2,
        paddingHorizontal: 5,
        fontWeight: '600',
        borderRadius: 3
      },
})

export default ItemDetails
