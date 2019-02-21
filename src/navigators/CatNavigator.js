import { createStackNavigator } from 'react-navigation';

import Category from '../screens/CatNavigatorScreens/Category';
import Products from '../screens/CatNavigatorScreens/Products';
import Order from '../screens/CatNavigatorScreens/Order';
import Auth from '../navigators/AuthNavigator';


export default CatNavigator = createStackNavigator(
    {
        Category: {
            screen: Category,
            navigationOption:{
                title:"Category", 
            }
        },
        Products: {
            screen: Products,
            navigationOption:{
                title:"Products", 
            }
        },
        Order: {
            screen: Order,
            navigationOption:{
                title:"Order", 
            }
        },
        Auth: {
            screen: Auth,
            navigationOption:{
                title:"Auth", 
            }
        },
        
    },
    {
        navigationOptions:{
            header: null,
        }
    }
)