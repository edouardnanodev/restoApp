import React from 'react'
import { Image, View, Text,StyleSheet } from "react-native"
import { elevation } from '../common/style'
import {FontAwesome} from "@expo/vector-icons"


export const RestaurantItem = (restaurant: any) => {
    console.log(restaurant.restaurant.name)
    return (
        <View style={[style.elevation,style.container]}>
            <Image style={style.image} source={{uri:restaurant.restaurant.image_url}} />
            <View style={style.infoContainer}>
                <Text style={style.header}>{restaurant.restaurant.name}</Text>
                <View style={style.info}>
        
                    <Text >{restaurant.restaurant.rating}<FontAwesome name='star' size={13}/></Text>
                    {/* <Text >{restaurant.restaurant.rating}</Text> */}
                    <Text style={style.money}>{restaurant.restaurant.price?(restaurant.restaurant.price.lenght>1?"200$":"100$"):'50$'}</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
elevation,
container:{
    backgroundColor:"rgba(241,186,87,1)",
    alignSelf:"stretch",
    height:100,
    borderRadius:20,
    marginHorizontal:4,
    marginVertical:10,
    flexDirection:"row",
    alignItems:"center"
},
image:{
    width:75,
    height:75,
    borderRadius:50,
    margin:10
},
infoContainer:{
    flex:1,
    padding:10
},
header:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:5
},
info:{
    // flexDirection:'row'
},
rating:{

},
money:{
    // marginLeft:140,
    textAlign:"right",
    color:"white",
    fontWeight:"bold"
}
})
