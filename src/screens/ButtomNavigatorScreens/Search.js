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

class Search extends Component{

  constructor(props) {
    super()
    
  }
  
  render () {
    return (
        <View style={{flex:1}}>
            {/* Header */}
            <Header />
            <Text> {localization.search} </Text>
        </View>
    )
  }
}

export default Search;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
})  