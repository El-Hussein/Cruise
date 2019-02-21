import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    Picker,
    TouchableOpacity,
    StyleSheet,
    I18nManager
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';

import BG from '../assets/images/bg.png';
import logo from '../assets/images/logo.png';

class First extends Component{

    constructor(props) {
         super()
         this.state={
             language:''
         }
    }
    render () {
         return (
            <View style={{backgroundColor:'white', height:hp('100%')}}>
                {/* HEADER */}
                <Header/>
                 
                <View style={{marginHorizontal:wp('18%')}}>

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('5%')}}>
                        <Image source={logo} style={{width:wp('60%'), height:hp('20%'), resizeMode:'contain'}}/>
                    </View>

                    <View style={{backgroundColor:'#2196F3', marginVertical:hp('2%'), width:wp('65%'), justifyContent:'center', alignItems:'center', height:hp('5%'), borderRadius:wp('5%')}}>
                        <Picker
                        selectedValue={this.state.language}
                        style={{color:'white', width:wp('40%'), marginRight:wp('10%')}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                            <Picker.Item label="اختر المدينة" value="choose_city" />
                            <Picker.Item label="طوخ" value="toukh" />
                        </Picker>
                        <Icon name="arrow-down" color="white" size={wp('3%')} style={{position:'absolute', right:wp('3%')}}/>
                    </View>
                    <View style={{backgroundColor:'#2196F3', marginVertical:hp('2%'), width:wp('65%'), justifyContent:'center', alignItems:'center', height:hp('5%'), borderRadius:wp('5%')}}>
                        <Picker
                        selectedValue={this.state.language}
                        style={{color:'white', width:wp('40%'), marginRight:wp('10%')}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                            <Picker.Item label="اختر الحي" value="choose_city" />
                            <Picker.Item label="طوخ" value="toukh" />
                        </Picker>
                        <Icon name="arrow-down" color="white" size={wp('3%')} style={{position:'absolute', right:wp('3%')}}/>
                    </View>
                    
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('22%')}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Root')} style={{justifyContent:'center', alignItems:'center', width:wp('30%'), height:hp('5%'), backgroundColor:'#0A64C4', borderRadius:wp('5%'), borderColor:'rgba(255,255,255,0.4)', borderWidth:wp('0.2%')}}>
                            <Text style={styles.buttonText}> {localization.signup} </Text>
                        </TouchableOpacity>
                    </View>

                         
                </View>

            </View>
         )
    }
}

export default First

const styles = StyleSheet.create({
    inputBorder:{
        backgroundColor:'#D3E9FE', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:wp('4%'), 
        marginBottom:hp('1.5%'), 
    },
    textInput:{
        width:wp('55%'), 
        padding:0, 
        height:hp('5.5%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#87CBFC',
        textAlign:'center',
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('5%'), 
        fontWeight:'bold'
    },
});