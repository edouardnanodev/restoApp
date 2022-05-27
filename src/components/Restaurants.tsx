import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import useRestaurants from '../hooks/useRestaurants'
import  RestaurantItem  from './RestaurantItem'
type props = { term: string }

 function Restaurants ({ term, navigation }: any) {
    const [{ data, loading, error }, searchRestaurant] = useRestaurants()

    useEffect(() => {
        searchRestaurant(term)
    }, [term])


    // console.log({ data, loading, error })

    // const searchTerm = ()=>{
    //     searchRestaurant(term)
    // }
    if (loading) return <ActivityIndicator size="large" color="#fcd10d" />
    if (error) return <View><Text style={style.error}>{error}</Text></View>
    return (
        <View>
            <Text style={style.header}>Top Restaurants</Text>
            <View >
                <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={(restaurant) => restaurant.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Resto",{ resto:item})}>
                            <RestaurantItem restaurant={item} />
                        </TouchableOpacity>
                    )} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginRight: 25,

    },
    header: {
        marginHorizontal: 25,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
      color:"white"
        
    },
    error: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 25
    }
})

// export default withNavigation(Restaurants)

export default withNavigation(Restaurants)