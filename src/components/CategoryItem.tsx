import React from 'react'
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native'
import { elevation } from '../common/style'

type catProps = {
    index:number,
    name:string,
    imgUrl:string | any,
    active: boolean,
    handlePress: ()=>any
}

export const CategoryItem = ({name,imgUrl,index,active,handlePress}: catProps) => {


  return (
    <TouchableOpacity onPress={handlePress}>
        <View style={[style.container, style.elevation, active?{backgroundColor:"rgb(241,186,87)"}:{backgroundColor:"white"}, index===0 ? {marginLeft:29} : {marginRight:15} ]}>
        <View style={style.imageContainer}>
            <Image source={imgUrl} style={style.image}/>
        </View>
        <Text>{name}</Text>
        
    </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    container:{
        width:70,
        height:100,
        borderRadius:20,
        marginVertical:15,
        marginHorizontal:12,
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
