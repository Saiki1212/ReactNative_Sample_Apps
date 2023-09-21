
declare module '*jpg'
// import { ImageSourcePropType } from "react-native"

interface AllProductsInterface {
    ID : string
    Name : string
    Imageurl : string
    OriginalPrice : number
    DiscountPrice : number
    OfferPercentage : number
    Rating : number
    RatingCount : string
    tags : string[]
}