import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

export const Restaurants = () => {
  return (
    <View> 
        <Text style={style.header}>Top Restaurants shdfh</Text>
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