/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { I18nManager, AsyncStorage } from 'react-native';
import RNRestart from 'react-native-restart'; 
import localization from './src/localization/localization';
import RootNav from './src/navigators/DrawerNav';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      language:'ar'
    }
    AsyncStorage.getItem('language').then((value)=>{
      console.log(value);
    })
    // this.getAccessToken().then((dataObj)=>{
    //   this.setState({
    //     language: dataObj,
    //   })
    //   console.warn("component: " + this.state.language);
    // });
    localization.setLanguage(this.state.language);
    if(this.state.language=='ar'){
      I18nManager.forceRTL(true);
    }else if(this.state.language=='en'){
      I18nManager.forceRTL(false);
    }
  }
  
  // async getAccessToken(){
  //   language = await AsyncStorage.getItem('language');
  //   if(language){
  //     console.log("getAccessToken: " + language);
  //     return language;
  //   }else{
  //     return null;
  //   }
  // }

  render() { 
    return (
        <RootNav/>       
    );
  }
}
