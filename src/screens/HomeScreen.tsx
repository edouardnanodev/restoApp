import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ImageBackground, FlatList, View, StyleSheet } from 'react-native'
import { Header } from '../components/Header'
import { CategoryItem } from '../components/CategoryItem'
import Restaurants from '../components/Restaurants'
import { Search } from '../components/Search'

export default function HomeScreen() {
    const [term, setTerm] = useState('Burger')
    const categories = [
        {
            name: "Burger",
            url: require(`../assets/images/burger.png`)
        },
        {
            name: "Pizza",
            url: require(`../assets/images/pizza.png`)
        },
        {
            name: "Steak",
            url: require(`../assets/images/steak.png`)
        },
        {
            name: "Cake",
            url: require(`../assets/images/cake.png`)
        },
        {
            name: "Drink",
            url: require(`../assets/images/smoothies.png`)
        },
        {
            name: "Pasta",
            url: require(`../assets/images/pasta.png`)
        }
    ]

    return (
        <ImageBackground resizeMode='cover' source={{ uri: "https://i.pinimg.com/originals/f4/6d/ac/f46dac364207e409b17506fc4543bc0e.jpg" }} style={{flex:1}}>
            <View style={styles.container}>

                <Header />
                <Search setTerm={setTerm} />
                {/* <CategoryItem name='Burger' imgUrl={require(`./src/assets/images/burger.png`)} /> */}

                <View>
                    <FlatList data={categories} renderItem={({ item, index }) => {
                        return <CategoryItem name={item.name} imgUrl={item.url} index={index} active={item.name == term} handlePress={() => {
                            setTerm(item.name)
                        }} />
                    }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(cat) => cat.name}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Restaurants term={term} />

                </View>
            </View>

        </ImageBackground>


    )
}
const styles = StyleSheet.create({
    container: {

        marginTop: 60
        // marginHorizontal:25,
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

