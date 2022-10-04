import style from './ProductItem.style';
import React from 'react';
import {Text, View, Image} from 'react-native';

const ProductItem=({products})=>{
    return(
        <View style={style.container}>
            <Image style={style.image} source={{uri: products.imgURL}}></Image>
            <Text style={style.title}>{products.title}</Text>
            <Text style={style.price}>{products.price}</Text>
            <Text style={style.inStock}>{products.inStock === true ? '' : 'Stokta Yok'}</Text>
        </View>
    )
}

export default ProductItem;