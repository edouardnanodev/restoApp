import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import useRestaurants from '../hooks/useRestaurants'
import {RestaurantItem} from './RestaurantItem'
type props = { term: string }

export const Restaurants = (term: props) => {
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
            <View>

                <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={(restaurant) => restaurant.id} 
                renderItem={({item}) => (<RestaurantItem restaurant={item}/>)} />

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginRight: 25,

    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10
    },
    error: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 25
    }
})