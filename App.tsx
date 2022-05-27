import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator({
  Home: HomeScreen,
  Resto: RestaurantScreen
},
  {
    initialRouteName: "Home",
    defaultNavigationOptions: { title: "Resto", headerShown: false, }
  }
)

export default createAppContainer(navigator)