// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import localization from '../localization/localization';
import Home from '../screens/ButtomNavigatorScreens/Home';
import Menu from '../screens/ButtomNavigatorScreens/Menu';
import Search from '../screens/ButtomNavigatorScreens/Search';
import Cart from '../screens/ButtomNavigatorScreens/Cart';
import Settings from '../screens/ButtomNavigatorScreens/Settings';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ButtomNav = createBottomTabNavigator(
  {
    Settings: {
      screen:Settings,
      navigationOptions:({navigation})=>({
        title: localization.settings,
      })
    },
    Cart: {
      screen:Cart,
      navigationOptions:({navigation})=>({
        title: localization.cart,
      })
    },
    Search: {
      screen:Search,
      navigationOptions:({navigation})=>({
        title: localization.search,
      })
    },
    Menu: {
      screen:Menu,
      navigationOptions:({navigation})=>({
        title: localization.menu,
      })
    },
    Home: {
      screen:Home,
      navigationOptions:({navigation})=>({
        title: localization.home,
      })
    },
  },
  {
    initialRouteName:'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = "home";
        } else if (routeName === 'Menu') {
          iconName = "list-ul";
        } else if (routeName === 'Search') {
            iconName = "search";
        } else if (routeName === 'Cart') {
            iconName = "shopping-cart";
        } else if (routeName === 'Settings') {
            iconName = "cog";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName}  size={wp('7%')} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#1D94FA',
      inactiveTintColor: '#5D7F89',
    },
  }
);

export default ButtomNav;