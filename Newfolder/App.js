import * as React from 'react';
import { Text, TouchableOpacity, AsyncStorage,View ,Dimensions, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import Home from './Home'
import Profile from './Profile';
import Categories from './Categories'
import Cart from './Cart'
import { Provider } from 'react-redux';
import Cartjson from './Cart-json.json'

//import { PersistGate } from 'redux-persist/es/integration/react';
//import { persistStore } from 'redux-persist';

// ...
import CartItems from './reducers/Cartitems'
import Product from './ProductScreen'
import { createStore } from 'redux';
import Texx from './Texx';
import datasend from './datasendrec.json'
const heightbb = height/16
import Ionn from 'react-native-vector-icons/Ionicons'
import MyTabs from './Mytabs1';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
const store=createStore(CartItems)
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
//const persistor =persistStore(store)
const customTabBarStyle = {
  activeTintColor: 'red',
  inactiveTintColor: 'blue',innerHeight:500,
  backgroundColor:"red",
  style: {backgroundColor: 'blue' },
}



function erfan(){

  return(
    <Text>sdsdsd</Text>
  )
}
//var erf  ;






export default function App() {
 
  return (
    <NavigationContainer  >
     <Provider store={store}>
    
       <MyTabs /></Provider>

    </NavigationContainer>
  );
}
