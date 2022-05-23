import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import {FontAwesome} from "@expo/vector-icons"
import {elevation} from "../common/style" 

export const Search = () => {
  return (
    <View style={[style.container, style.elevation]}>
        <FontAwesome name='search' size={25}/>
        <TextInput style={style.input} placeholder='Restaurants, food'/>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginTop:10,
        backgroundColor:"white",
        padding: 15,
        borderRadius:40,
        marginHorizontal:25
    },  
    elevation,

    input:{
        fontSize:20,
        marginHorizontal:10
    }
})