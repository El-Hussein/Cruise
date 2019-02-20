import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput
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
// import cat1_image from '../components/images/cat_1.png';

// const Slider = props => ( <View style={[styles.imageContainer, {alignItems:'center', justifyContent:'center', marginTop:10,}]}>
//         <Image style={{height:hp('14.8%'), width:wp('99%')}} source={props.uri} resizeMode="contain"/>
//     </View>
// )

class Menu extends Component{

  constructor(props) {
    super()
    this.state = {
      imagesSlider: [
        // require('../components/images/2.jpg'),
        // require('../components/images/1.jpg'),
        // require('../components/images/3.jpg'),
      ],
    }
  }
  
  render () {
    return (
        <View style={{flex:1}}>
            {/* Header */}
            <Header/>
            <Text> {localization.menu} </Text>
        </View>
    )
  }
}

export default Menu;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({})  