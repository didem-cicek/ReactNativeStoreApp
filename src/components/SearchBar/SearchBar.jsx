import React from "react";
import Styles from './SearchBar.style';
import {TextInput, View} from 'react-native';

const SearchBar = ()=>{
return(
    <View>
        <TextInput placeHolder="Ara..." placeHolderTextColor={'#BBBBBB'} style={Styles.textInput}></TextInput>
    </View>
)
}
export default SearchBar;