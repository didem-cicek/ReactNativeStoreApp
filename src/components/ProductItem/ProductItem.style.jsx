import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#eceff1",
        padding:10,
        margin:5,
        borderRadius:10,
    },
    title:{
        margin:5,
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
    },
    image:{
        height:Dimensions.get('window').height/4,
        borderRadius:10,
        width:'100%',
        resizeMode:'contain',
    },
    price:{
        fontSize:24,
        fontWeight:'bold',
        margin:5,
    },
    inStock:{
        fontSize:18,
        color:'#ff0000',
        margin:5,
        fontWeight:'bold',
        textTransform:'uppercase',
    }
});

export default styles;