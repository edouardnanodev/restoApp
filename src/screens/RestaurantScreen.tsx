import React,{useEffect} from 'react'
import { Image, ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import useRestaurant from '../hooks/useRestaurant';


const RestaurantScreen = ({ navigation }:any) => {
    console.log(navigation.state.params.resto);
    const id = navigation.state.params.resto.id
    const [{ data, loading, error }, getRestaurant] = useRestaurant()
 
    useEffect(() => {
        getRestaurant(id)
    }, [navigation])
    console.log(data?.photos)
    
    if (loading) return <ActivityIndicator size="large" color="#fcd10d" />
    if (error) return <View><Text style={style.error}>{error}</Text></View>

    return (
        <View style={{marginTop:70}}>

            {/* <Header></Header> */}
            <Text style={style.header}>{data?.name}</Text>

            <FlatList showsVerticalScrollIndicator={false} data={data?.photos} keyExtractor={(restaurant) => restaurant.id}
                    renderItem={({ item }) => (
                        <Image style={style.image} source={{ uri: item }} />
                    )} />
        </View>
    )

}
const style = StyleSheet.create({
    header:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center'
    },
    image: {
        width: '94%',
        height: 300,
        borderRadius: 20,
        margin: 10
    },
    error: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 25
    }
}) 

export default RestaurantScreen