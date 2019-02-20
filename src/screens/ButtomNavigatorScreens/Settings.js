import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import localization from '../../localization/localization';

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
        <View style={{flex:1}}>
            {/* Header */}
            <Header />
            <Text> {localization.settings} </Text>
            <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('22%')}}>
                <TouchableOpacity onPress={()=>this.setData('ar')} style={{justifyContent:'center', alignItems:'center', width:wp('30%'), height:hp('5%'), backgroundColor:'#2196F3', borderRadius:wp('5%'), borderColor:'rgba(255,255,255,0.4)', borderWidth:wp('0.2%')}}>
                    <Text style={styles.buttonText}> {localization.arabic} </Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('2%')}}>
                <TouchableOpacity onPress={()=>this.setData('en')} style={{justifyContent:'center', alignItems:'center', width:wp('30%'), height:hp('5%'), backgroundColor:'#2196F3', borderRadius:wp('5%'), borderColor:'rgba(255,255,255,0.4)', borderWidth:wp('0.2%')}}>
                    <Text style={styles.buttonText}> {localization.english} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

export default Settings;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
})   