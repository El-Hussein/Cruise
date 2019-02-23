import { createStackNavigator } from 'react-navigation';

import MerchentCart from '../screens/MerchentOrders/MerchentCart';
import ClientsOrdersFinal from '../screens/MerchentOrders/ClientsOrdersFinal';
import ClientsOrders from '../screens/MerchentOrders/ClientsOrders';


export default MerchentOrder = createStackNavigator(
    {
        MerchentCart: {
            screen: MerchentCart,
            navigationOption:{
                title:"MerchentCart", 
            }
        },
        COrder: {
            screen: ClientsOrders,
            navigationOption:{
                title:"COrder",
            }
        },
        ClientsOrdersFinal: {
            screen: ClientsOrdersFinal,
            navigationOption:{
                title:"ClientsOrdersFinal",
            }
        },
    },
    {
        navigationOptions:{
            header: null,
        }
    }
)