import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { elevation } from '../common/style'

type catProps = {
    name:string,
    url:string
}

export const CategoryItem:catProps = ({name,imgUrl}: catProps) => {

    console.log(name)
  return (
    <View style={[style.container, style.elevation]}>
        <View style={style.imageContainer}>
            <Image source={imgUrl} style={style.image}/>
        </View>
        <Text>{name}</Text>
        
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        width:70,
        height:100,
        borderRadius:20,
        marginVertical:15,
        marginHorizontal:15,
        backgroundColor: "rgb(241,186,87)",
        alignItems:"center",
        justifyContent:"center"

    },
    elevation,
    image:{
        width:35,
        height:35
    },
    imageContainer:{
        width:50,
        height:50,
        borderRadius:50,
        marginBottom:5,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"
        
    }
})
