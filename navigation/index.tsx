/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import {Octicons, MaterialCommunityIcons, MaterialIcons} from  '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors';
import ChatRoom from '../components/chatroom/chatroom';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    
    
     
     
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: Colors.light.headerColor,
        shadowOpacity:0,
        elevation:0
      }, headerTintColor: Colors.light.background }}>
      <Stack.Screen name="Root" options={{
        title:'Whatsapp', 
        headerRight:()=>{
        return <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginRight:20}}>
            <Octicons name="search" style={{marginRight:20}} size={20} color={Colors.light.background} />
            <MaterialCommunityIcons name="dots-vertical" size={25} color={Colors.light.background} />
          </View>;
      }}} component={BottomTabNavigator}  />
     
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ChatRoom" component={ChatRoom}  options={{title: 'Chat Room', headerRight:()=>{
        return (<View style={{flexDirection:'row', alignItems:'center'}}>
          <Octicons name="device-camera-video" style={{marginRight:20}} size={20} color={Colors.light.background} />
          <MaterialIcons name="call" style={{marginRight:20}} size={20} color={Colors.light.background}></MaterialIcons>
        </View>)
      }}}/>
      
    </Stack.Navigator>
  );
}
