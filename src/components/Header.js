import React from 'react'

import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

import logo from '../assets/images/logo.png';

class Header extends React.Component {
    render() {
        // var drawer;
        // if(this.props.drawer){
        //     drawer = ()=>{this.props.navigation.toggleDrawer()};
        // }else {
        //     drawer = ()=>console.log('just drawer in home');
        // }

        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}>
                    <Icon name="bars" color="white" size={wp('7%')}/>
                </TouchableOpacity>
                <View>
                    <Image source={logo} style={{width:wp('20%'), height:hp('6%'), resizeMode:'contain'}}/>
                </View>
                {/* <TouchableOpacity  onPress={()=>this.props.navigation.dispatch(NavigationActions.back())}> */}
                <TouchableOpacity>
                    <Icon name="ellipsis-h" color="white" size={wp('7%')}/>
                </TouchableOpacity>
            </View>
        )
    }
}
export default withNavigation(Header);
// export default Header;



const styles = StyleSheet.create({
    header:{
        height:hp('7%'),
        backgroundColor:"#2196F3",
        justifyContent:'space-between',
        alignItems:'center',
        padding:wp('5%'),
        flexDirection:'row'
    },
    image4_5:{
        width:wp('4.5%'), 
        height:wp('4.5%'), 
        resizeMode:'contain'
    },
    rowCenter:{
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row'
    },
    textHeader:{
        color:'white', 
        fontSize:wp('4.5%'), 
        marginHorizontal:wp('3%'), 
        fontWeight:'bold'
    },
    image6_5:{
        width:wp('6.5%'), 
        height:wp('6.5%'), 
        resizeMode:'contain'
    },
});