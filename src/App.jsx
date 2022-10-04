import React from 'react';
import ProductItem from './components/ProductItem/ProductItem';
import ProductData from './data/product-data.json';
import SearchBar from './components/SearchBar/SearchBar';
import { FlatList, StyleSheet, View,Text } from 'react-native';

export default function App(){
  const renderProduct = ({item}) => <ProductItem products={item}/>

  return(
    <View style={styles.container}>
    <Text style={styles.title}>PATIKASTORE</Text>
    <SearchBar></SearchBar>
    <FlatList 
    numColumns={2} 
    keyExtractor={item=>item.id.toString()} 
    data={ProductData}
    renderItem={renderProduct}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    title:{
      color:'#800080',
      fontSize:30,
      fontWeight:'bold',
      margin:5,

    }
});