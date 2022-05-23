import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View } from 'react-native';
import { Header } from './src/components/Header';
import { Search } from './src/components/Search';
import { CategoryItem } from './src/components/CategoryItem';
import { Restaurants } from './src/components/Restaurants';

export default function App() {
   const [term, setTerm] = useState('Burger')
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
      name:"Drink",
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
      <Search setTerm={setTerm}/>
      {/* <CategoryItem name='Burger' imgUrl={require(`./src/assets/images/burger.png`)} /> */}

      <View>
      <FlatList data={categories} renderItem={({item,index})=>{
        return <CategoryItem name={item.name} imgUrl={item.url} index={index} active={item.name==term} handlePress={()=>{
          setTerm(item.name)
        }}/>
      }} 
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(cat)=> cat.name}
      />
      </View>
      <View  style={{marginHorizontal:25, marginTop:15}}>
      <Restaurants/>

      </View>

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
