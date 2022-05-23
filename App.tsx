import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View } from 'react-native';
import { Header } from './src/components/Header';
import { Search } from './src/components/Search';
import { CategoryItem } from './src/components/CategoryItem';

export default function App() {
  const categories = [
    {
      name:"Burger",
      url: require(`./src/assets/images/burger.png`)
    },
    {
      name:"Pizza",
      url: require(`./src/assets/images/pizza.png`)
    },
    {
      name:"Steak",
      url: require(`./src/assets/images/steak.png`)
    },
    {
      name:"Cake",
      url: require(`./src/assets/images/cake.png`)
    },
    {
      name:"Smoothie",
      url: require(`./src/assets/images/smoothies.png`)
    },
    {
      name:"Pasta",
      url: require(`./src/assets/images/pasta.png`)
    }
  ]
  return (
    <View style={styles.container}>
      <Header/>
      <Search/>
      {/* <CategoryItem name='Burger' imgUrl={require(`./src/assets/images/burger.png`)} /> */}

      <FlatList data={categories} renderItem={({item})=>{
        return <CategoryItem name={item.name} imgUrl={item.url}/>
      }} 
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(cat)=> cat.name}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

      marginTop:60,
      // marginHorizontal:25,

    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
