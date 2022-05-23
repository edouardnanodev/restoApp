import React,{useState,useEffect} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import yelp from "../api/yelp"
import axios from 'axios'

export const Restaurants = () => {

useEffect(() => {
    search()
}, [])

    const search = async()=>{
const response = await yelp.get("/search", {
    params:{
        limit:15,
        term:"dessert",
        location:'Toronto'
}})
console.log(response);

    }
  return (
    <View> 
        <Text style={style.header}>Top Restaurants</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        marginRight:25,

    },
    header:{
        fontWeight:'bold',
        fontSize:20,
        paddingBottom:10
    }
})