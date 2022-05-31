import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";


import { ImageBackground, FlatList, View, StyleSheet } from 'react-native'
import { Header } from './src/components/Header'
import { CategoryItem } from './src/components/CategoryItem'
import Restaurants from './src/components/Restaurants'
import { Search } from './src/components/Search'

import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';



export const App = () => {
  const [term, setTerm] = useState('Burger')
  const categories = [
    {
      name: "Burger",
      url: require(`./src/assets/images/burger.png`)
    },
    {
      name: "Pizza",
      url: require(`./src/assets/images/pizza.png`)
    },
    {
      name: "Steak",
      url: require(`./src/assets/images/steak.png`)
    },
    {
      name: "Cake",
      url: require(`./src/assets/images/cake.png`)
    },
    {
      name: "Drink",
      url: require(`./src/assets/images/smoothies.png`)
    },
    {
      name: "Pasta",
      url: require(`./src/assets/images/pasta.png`)
    }
  ]
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        console.log(appIsReady)
        console.log('red...');


        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      console.log("green..");


      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <ImageBackground resizeMode='cover' source={{ uri: "https://i.pinimg.com/originals/f4/6d/ac/f46dac364207e409b17506fc4543bc0e.jpg" }} style={{ flex: 1 }}>
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
    </View>
  )
}

export default App

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

// const navigator = createStackNavigator({
//   Home: HomeScreen,
//   Resto: RestaurantScreen
// },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: { title: "Resto", headerShown: false, }
//   }
// )

// export default createAppContainer(navigator)