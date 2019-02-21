import { createStackNavigator } from 'react-navigation';

import Register from '../screens/AuthScreens/Register';
import Signin from '../screens/AuthScreens/Signin';


export default AuthNavigator = createStackNavigator(
    {
        Register: {
            screen: Register,
            navigationOption:{
                title:"Register", 
            }
        },
        Signin: {
            screen: Signin,
            navigationOption:{
                title:"Signin",
                header: null, 
            }
        },
    },
    {
        navigationOptions:{
            header: null,
        }
    }
)