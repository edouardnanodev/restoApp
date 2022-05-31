import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Alert, Modal, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantItem from './RestaurantItem'
type props = { term: string }

function Restaurants({ term }: any) {
    const [{ data, loading, error }, searchRestaurant] = useRestaurants()
    const [modalVisible, setModalVisible] = useState(false);

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
                        <TouchableOpacity onPress={()=>setModalVisible(true)}>
                            <RestaurantItem restaurant={item} modal={modalVisible}/>
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
        color: "white"

    },
    error: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 25
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})

// export default withNavigation(Restaurants)

export default Restaurants