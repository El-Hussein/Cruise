// Drawer Nav for all links with default home page 
// profile, books, settings, conditions, call_us, exit

import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {I18nManager} from 'react-native';
import Home from './ButtomNav';
import Profile from '../screens/DrawerNavigatorScreens/Profile';
import MyCart from '../screens/DrawerNavigatorScreens/MyCart';
import ContentDrawerComponent from '../components/ContentDrawerCompnent';
import Conditions from '../screens/DrawerNavigatorScreens/Conditions';
import Call_Us from '../screens/DrawerNavigatorScreens/Call_Us';
import MerchentCart from '../navigators/MerchentOrdersNav'
// import MerchentCart from '../screens/MerchentOrders/MerchentCart'
import Register from '../screens/AuthScreens/Register';
import Signin from '../screens/AuthScreens/Signin';

export default RootNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOption:{
                title:"Home",
                header: null, 
            }
        },
        Profile: {
            screen: Profile,
            navigationOption:{
                title:"Profile", 
            }
        },
        MerchentCart: {
            screen: MerchentCart,
            navigationOption:{
                title:"MerchentCart", 
            }
        },
        MyCart: {
            screen: MyCart,
            navigationOption:{
                title:"MyCart", 
            }
        },
        Call_Us: {
            screen: Signin,
            navigationOption:{
                title:"Test", 
            }
        },
        Conditions: {
            screen: Register,
            navigationOptions: {
                title:'Test'
        },
    },
        
        
    },
    {
        showsVerticalScrollIndicator: true,
        contentComponent:props => <ContentDrawerComponent {...props}/> ,
        drawerPosition:I18nManager.isRTL? 'right':'left',
        drawerWidth:wp('85%'),
    }
)
