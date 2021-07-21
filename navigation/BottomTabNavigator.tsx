/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourNavigator';
import { BottomTabParamList, TabOneParamList, TabTwoParamList,TabThreeParamList,TabFourParamList } from '../types';

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background, style:{
        backgroundColor: Colors.light.headerColor, 
      },showIcon: true, labelStyle:{fontWeight:'bold', fontSize:16}, indicatorStyle:{backgroundColor:Colors[colorScheme].background, height:4}}}
      >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="camera" color={color} size={25} />,
          tabBarLabel: () =>null
          
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          title:'CHATS'
        }}
      />

      <BottomTab.Screen
              name="TabThree"
              component={TabThreeNavigator}
              options={{     
                title:'STATUS'
              }}
            />

    <BottomTab.Screen
                  name="TabFour"
                  component={TabFourNavigator}
                  options={{     
                    title:'CALLS'
                  }}
                />
    </BottomTab.Navigator>


    

  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator headerMode='none'>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator headerMode='none'>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
     
      />
    </TabTwoStack.Navigator>
  );
}


const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator headerMode='none'>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator headerMode='none'>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
      />
    </TabFourStack.Navigator>
  );
}
