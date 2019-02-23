import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import localization from '../../localization/localization';
import BG from '../../assets/images/bg.png';
import ProfileDefault from '../../assets/images/ProfileDefault.png';

import Header from '../../components/Header';

class Settings extends Component{

  constructor(props) {
    super()
  }

  setData(data){
    return async () => {
      try {
        await AsyncStorage.setItem('language', JSON.stringify(data)).then(()=>{
          alert('inserted well')
        });
      } catch (error) {
        // Error saving data
      }
    }
  }

  render () {
    return (
        <ImageBackground source={BG} style={{width:wp('100%'), height:hp('100%')}}>
            {/* Header */}
            <Header />

            <View style={{height:hp('25%'), width:wp('100%'), justifyContent:'center', alignItems:'center'}}>
                <Image source={ProfileDefault} style={{width:wp('25%'), borderWidth:wp('0.8%'), borderColor:'white', height:wp('25%'), borderRadius:wp('12.5%'), backgroundColor:'red', margin:wp('2%')}}/>
                <Text style={{fontWeight:'bold', fontSize:wp('4.2%'), color:'white'}}> محمد عبدالله إبراهيم </Text>
                <Text style={{fontWeight:'bold', fontSize:wp('4.2%'), color:'#E4EFF5'}}> شارع الرياض في وسط المدينه </Text>
            </View>
             
            <View style={{marginHorizontal:wp('15%')}}>
              <View style={{backgroundColor:'#3FA9FD', padding:wp('1%'), alignSelf:'baseline', borderBottomRightRadius:wp('2%'), borderTopRightRadius:wp('2%'),}}>
                <Text style={{fontSize:wp('4.5%'), color:'white', fontWeight:'bold'}}> {localization.phone} </Text>
              </View>
              <View style={{justifyContent:'space-between', width:wp('70%'), alignItems:'center', marginTop:hp('2%')}}>
                <View style={styles.inputBorder} >
                  <Text style={styles.textStyle}> 01023239809 </Text>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal:wp('15%')}}>
              <View style={{backgroundColor:'#3FA9FD', padding:wp('1%'), alignSelf:'baseline', borderBottomRightRadius:wp('2%'), borderTopRightRadius:wp('2%'),}}>
                <Text style={{fontSize:wp('4.5%'), color:'white', fontWeight:'bold'}}> {localization.registerAddress} </Text>
              </View>
              <View style={{justifyContent:'space-between', width:wp('70%'), alignItems:'center', marginTop:hp('2%')}}>
                <View style={styles.inputBorder} >
                  <Text style={styles.textStyle}> 9 شارع الزهور -مركز القليوبيه </Text>
                </View>
              </View>
            </View>
            
        </ImageBackground>
    )
  }
}

export default Settings;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputBorder:{
      backgroundColor:'#D3E9FE', 
      flexDirection:'row', 
      justifyContent:'center', 
      alignItems:'center', 
      borderRadius:wp('4%'), 
      marginBottom:hp('1.5%'), 
      width:wp('65%'),
  },
  textStyle:{
      width:wp('55%'), 
      padding:0, 
      height:hp('5.5%'), 
      paddingHorizontal:wp('2%'), 
      fontSize:wp('4%'), 
      fontWeight:'600', 
      color:'#196058',
      textAlign:'center',
      textAlignVertical:'center',
  },
  buttonText:{
      color:'white', 
      textAlign:'center', 
      fontSize:wp('5%'), 
      fontWeight:'bold'
  },
});