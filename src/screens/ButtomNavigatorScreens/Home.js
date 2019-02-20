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
import localization from '../../localization/localization';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';

import cat1_image from '../../assets/images/product.jpg';

// const Slider = props => ( <View style={[styles.imageContainer, {alignItems:'center', justifyContent:'center', marginTop:10,}]}>
//         <Image style={{height:hp('14.8%'), width:wp('99%')}} source={props.uri} resizeMode="contain"/>
//     </View>
// )

class Home extends Component{

  constructor(props) {
    super()
    this.state = {
      products: [
        {code:0, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
        {code:1, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
        {code:2, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
        {code:3, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
        {code:4, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
        {code:5, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
        {code:6, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
        {code:7, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
        {code:8, image:{src: cat1_image, width:2480, height:3508}, name:"نسكافيه فانيليا",},
      ],
    }
  }
  
  render () {
    return (
        <View>
            {/* Header */}
            <Header/>
            <View style={{}}>
              <View style={{alignSelf:'flex-start'}}>
                <Text style={{fontSize:wp('6%'), textAlign:'left', color:'white', width:'auto', marginVertical:hp('3$'), backgroundColor:'rgba(0, 61, 124, 0.8)'}}> {localization.merchentName} </Text>
              </View>
              <View style={{backgroundColor:'rgba(33, 150, 243, 0.7)', marginHorizontal:wp('10%'), flexDirection:'row', justifyContent:'center', alignItems:'center', width:wp('80%'), height:hp('6%'), borderRadius:wp('6%'), borderColor:'white', borderWidth:wp('0.3%')}}>
                <TextInput
                  style={{padding:0, color:'white', fontSize:wp('5%'), fontWeight:'bold', width:wp('65%'), textAlign:'center', textAlignVertical:'center'}}
                  placeholder={localization.SearchPlaceHolder}
                  placeholderTextColor="white"
                  onChangeText={(text)=>this.setState({text})}
                />
                <Icon name="search" size={wp('5%')} color="white"/>
              </View>
            </View>


            <FlatList 
                data={this.state.products}
                renderItem={({item}) =>{
                  return(
                    
                    <View style={{paddingHorizontal:wp('2%'), paddingVertical:hp('0.7%')}}>
                          <Image source={item.image.src} style={{width:wp('24%'), height:hp('12%'),borderRadius:wp('2%'), borderColor:'#A2D3FB', borderWidth:wp('0.3%'),}}/>
                          <View style={{textAlign:'center'}}>
                              <Text style={{textAlign:'center', color:'#4F4F4F', fontWeight:'bold', fontSize:wp('3.5%')}}>{item.name}</Text>
                          </View>
                      </View>
                    )
                    }
                }
                keyExtractor={item => toString(item.name)}
                style={{marginHorizontal:wp('7.5%'), width:wp('85%'), marginTop:hp('1%')}}
                numColumns={3}
                />

            <TouchableOpacity style={{backgroundColor:'rgb(33, 150, 243)', marginHorizontal:wp('20%'), flexDirection:'row', justifyContent:'center', alignItems:'center', width:wp('60%'), height:hp('5%'), borderRadius:wp('6%'), borderColor:'white', borderWidth:wp('0.3%'), marginTop:hp('5%')}}>
              <Text style={{color:'white', fontSize:wp('5%')}}> {localization.freeDlievery} </Text>
            </TouchableOpacity>
        </View>
    )
  }
}

export default Home;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header:{
    flex: 2.6,
    flexDirection:'row',
  },
  categories:{
    flex: 2,
    // backgroundColor:'blue',
  },
  slider:{
    flex: 4,
    backgroundColor:'grey',
    marginBottom:2,
    marginTop:1,
  },
  selected_products:{
    flex: 15,
    // backgroundColor:'green',
  },
  footer:{
    flex: 2.6,
    // backgroundColor:'brown',
  },


  header_image_bg:{
    flex: 1,
    resizeMode:'center',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingLeft:4
  },
  logo :{
    width:'55%',
    height:'80%',

  },

  image_slider:{
    width: wp('99%'),
  },

  category:{
    margin:1,
    // padding:1,
    justifyContent:'center',
    alignItems:'center',
  },
  category_image: {
    width:35,
    height:35,
    marginVertical:2,
  },
  category_name:{
    fontWeight:"bold",
    fontSize:12,
    color: "white",
  },

  product:{
    width: wp('47.5%'),
    marginVertical:wp('0.8%'),
    marginHorizontal:wp('0.8%'),
    borderColor:"#03507E",
    borderWidth:wp('0.4%'),
    borderRadius:wp('2%'),
    padding:wp('1%'),
  },
  product_name:{
    textAlign: 'center',
    color:"#03507E",
    fontWeight:"600",
    fontSize:12,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    height:hp('5%')
  },
  product_price:{
    color:"#03507E",
    fontWeight:"bold",
    fontSize:18,
  },

  addToCart:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#FE0000",
    borderRadius:5,
    borderWidth:1,
    borderColor:"#770101"
  },
})   