import React from 'react'
import {Text, View, StyleSheet } from 'react-native';


export const Header = () => {
  return (
    
    <View style={style.container}>
      <Text style={style.lightHeader}>Grab your</Text>
      <Text style={style.boldHeader}>Delicious Meal!</Text>
    </View>
    
  )
}

const style = StyleSheet.create({
  container:{
      marginHorizontal:25
  },
  lightHeader:{
    fontSize:35,
  },
  boldHeader:{
    fontSize:40,
    fontWeight:"bold"
  }
})
