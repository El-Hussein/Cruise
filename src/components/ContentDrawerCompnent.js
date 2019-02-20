import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import DrawerBG from '../assets/images/drawerBG.png';
import ProfileDefault from '../assets/images/ProfileDefault.png';
import localization from '../localization/localization';

class Artboard3 extends Component{

    constructor(props) {
         super();
         this.state= {
             list:[
                 {name:localization.homeDrawer, icon:require('../assets/images/homeDrawer.png'), active:true, link:'Home'},
                 {name:localization.profileDrawer, icon:require('../assets/images/profileDrawer.png'), active:false, link:'Profile'},
                 {name:localization.cartDrawer, icon:require('../assets/images/cartDrawer.png'), active:false, link:'MyCart'},
                 {name:localization.call_usDrawer, icon:require('../assets/images/call_usDrawer.png'), active:false, link:'Call_Us'},
                 {name:localization.conditionsDrawer, icon:require('../assets/images/conditionsDrawer.png'), active:false, link:'Conditions'},
                 {name:localization.exitDrawer, icon:require('../assets/images/exitDrawer.png'), active:false, link:'Exit'},
             ]
         }
    }

    render () {
         return (
            <ImageBackground source={DrawerBG}  style={{height:hp('100%'), width:wp('100%'), backgroundColor:'red'}}>
                <View style={{backgroundColor:'#1976D3', marginTop:hp('3%'), marginHorizontal:wp('2%'), flexDirection:'row', justifyContent:'center', alignItems:'center', width:wp('80%'), height:hp('7%'), borderRadius:wp('6%')}}>
                    <TextInput
                    style={{padding:0, color:'white', fontSize:wp('5%'), fontWeight:'bold', width:wp('65%'), textAlign:'center', textAlignVertical:'center'}}
                    placeholder={localization.search}
                    placeholderTextColor="white"
                    onChangeText={(text)=>this.setState({text})}
                    />
                    <Icon name="search" size={wp('5%')} color="white"/>
                </View>
                <View style={{height:hp('25%'), width:wp('85%'), justifyContent:'center', alignItems:'center'}}>
                    <Image source={ProfileDefault} style={{width:wp('18%'), borderWidth:wp('0.8%'), borderColor:'white', height:wp('18%'), borderRadius:wp('9%'), backgroundColor:'red', marginBottom:wp('1%')}}/>
                    <Text style={{fontWeight:'bold', fontSize:wp('4.2%'), color:'white'}}> محمد عبدالله إبراهيم </Text>
                    <Text style={{fontWeight:'bold', fontSize:wp('4.2%'), color:'#E4EFF5'}}> شارع الرياض في وسط المدينه </Text>
                </View>
                
                <View style={{marginTop:hp('1.5%')}}>
                    <FlatList 
                    data={this.state.list}
                    renderItem={({item}) =>{
                        if(item.active){
                            activeStyle=StyleSheet.create({
                                AC:{backgroundColor:'rgba(255,255,255,0.3)', borderTopWidth:wp('0.3%'), borderTopColor:'rgba(255,255,255,0.5)'}
                            });
                        }else{
                            activeStyle=StyleSheet.create({
                                AC:{}
                            });
                        }
                        return (
                        <TouchableOpacity disabled={item.active} onPress={()=>this.props.navigation.navigate(item.link)} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('85%')}, activeStyle.AC]}>
                            <Image source={item.icon} style={{width:wp('6%'), height:wp('6%'), resizeMode:'contain', marginRight:wp('2%')}}/>
                            <Text style={{fontWeight:'bold', fontSize:wp('4.5%'), color:'#E4EFF5', textAlign:'left', width:wp('70%')}}> {item.name} </Text>
                        </TouchableOpacity>
                        )
                    }
                    }
                    keyExtractor={item => toString(item.name)}
                    />
                </View>

            </ImageBackground>
         )
    }
}

export default Artboard3
