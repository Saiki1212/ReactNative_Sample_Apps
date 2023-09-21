import { Image, StyleSheet, Text, View, Dimensions} from 'react-native'
import React, { PropsWithChildren } from 'react'

const {width} = Dimensions.get('window')

type ProductProps = PropsWithChildren<{
    product : AllProductsInterface
}>

const ProductItem = ({product}: ProductProps) => {
  return (
    
    <View style={styles.conatiner}>
      <Image
        source={{uri: product.Imageurl}}
        style={styles.Image}
      />
      <View style={styles.second}>
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
               {product.OfferPercentage}﹪ off
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    width: width,
    margin: 8,
  },
  rowContainer: {
    flexDirection: 'row'
  },
  Image: {
    height: 160,
    width: 160,
    // borderRadius: 12
  },
  second: {
    // alignItems: 'center'
    justifyContent: 'center'
  },
  name: {
    marginTop: -15,
    fontSize: 15,
    color: '#000',
    fontWeight: '500'
  },
  ratingContainer: {
    marginTop: 8
    // justifyContent: 'flex-start',
    // margin: 12
  },
  priceContainer: {
    marginTop: 8,
  },
  rating: {
    borderRadius: 4,
    backgroundColor: '#008c00',
    paddingHorizontal: 6,
    justifyContent: 'center',
    // marginLeft: 8
  },
  ratingText: {
    color: '#fff',
    fontWeight: '500'
  },
  ratingCount: {
    fontSize: 13,
    marginLeft: 5,
    fontWeight: '400',
    color: '#0077b6',
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'line-through'
  },
  discountPrice: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '900',
    color: '#000'
  },
  offerPercentage: {
    marginLeft: 8,
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550'
  },
})

export default ProductItem