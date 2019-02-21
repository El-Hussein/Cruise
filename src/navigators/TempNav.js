import { createStackNavigator } from 'react-navigation';

import Root from '../navigators/DrawerNav';
import First from '../screens/First';


export default tempNav = createStackNavigator(
    {
        First: {
            screen: First,
            navigationOption:{
                title:"First",
                header: null, 
            }
        },
        Root: {
            screen: Root,
            navigationOption:{
                title:"Root", 
            }
        },
    },
    {
        navigationOptions:{
            header: null,
        }
    }
)