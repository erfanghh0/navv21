import React from 'react';
//import type {Node} from 'react'asasas;
//import Icon1 from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  AsyncStorage,
  TextInput,
  useColorScheme,
  View,
  Image,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
  Keyboard,
  Modal
} from 'react-native';
import Ionn from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from "@react-navigation/native";
import Profile from './Profile';
const Stack = createNativeStackNavigator();
import datasend from './datasendrec.json'
//import {} from 'react-navigation-material-bottom-tabs'
import Apps from './Apps'
import search from './search'
//import Icon from 
import apppq from './Appq';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const width1 = Dimensions.get("window").width;
var erg;
//import Shop from './Shopping';
const {width}=Dimensions.get("window")
const height1=Dimensions.get("window").height
const height=width*0.6;
const images =[
  'https://wallpapercave.com/wp/wp2960877.jpg',
  'https://wallpapercave.com/wp/wp2960877.jpg',
  'https://wallpapercave.com/wp/wp2960877.jpg',
  'https://wallpapercave.com/wp/wp2960877.jpg',
  'https://wallpapercave.com/wp/wp2960850.jpg',
  'https://wallpapercave.com/wp/wp2960890.jpg',
  'https://wallpapercave.com/wp/wp2960890.jpg'
  ,
]

import {Data} from './Data'
import Productscreen from './ProductScreen'
import Cart12 from './Cart-json.json'
import { connect } from 'react-redux';
import Appq from './Appq';

import Cart from './Cart'
var refa;
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={searchuser:"@",keyboard:0}
    }

    
    
    render(){
        
      
        return <View><View  style={{height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,padding:5,marginTop:5,backgroundColor:"white",flexDirection:"row"}}><Ionn name="close" onPress={()=>{this.props.navigation.navigate('Home1')}} size={30} style={{flex:1,marginTop:5}}/><TextInput editable={true}
        onChangeText={(value)=>{this.setState({searchuser:value});}}  placeholder="???? ???????????????? ?????? ?? ???? ????????" placeholderTextColor="#5295df"  style={{flex:9,height:height1/13-15,backgroundColor:"#e5f5f7",borderRadius:5}} /></View><ScrollView>
            
            {Data.map((item)=>{
               //console.log(item.name.includes("??????????"))
               
               if(item.name !== undefined){
                   
                 if(this.state.searchuser == ""){
                   this.setState({searchuser:"@"})
                  
                 }
                if(item.name.toLowerCase().includes(this.state.searchuser.toLowerCase())){
                  return/*<Text>{item.name}</Text>*/<ScrollView style={{width:"100%",height:height1/4}}>
                    
                  <TouchableOpacity style={{height:height/1.5}} onPress={()=>{this.setState({cate: item.cate_1});this.props.navigation.navigate('seacrch55',{id:item.id})}}><View style={{flexDirection:"row"}} ><Image source={{uri:Data[item.id].prev1}}   style={{height:height1/5,width:width1/3}}/><View style={{backgroundColor:"white",width:width/1.5,padding:5}} ><Text  style={{backgroundColor:"white",textAlign:"right",width:"100%",fontSize:12,alignSelf:"flex-start"}} numberOfLines={2}>{Data[item.id].name}</Text><Text onPress={()=>{console.log(this.props.deff)}} style={{alignSelf:"flex-end"}}>?????? {item.colors.length} ???????? ?????????? <View style={{backgroundColor:item.colorname,borderRadius:50,height:15,width:15}}></View><Text>  {item.color}  </Text></Text><Text>???????? {Data[item.id].price}</Text></View></View></TouchableOpacity>
                </ScrollView> 
                }
                
               }
                  
                
              })}

            </ScrollView></View>
    }
}
export default App;