import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import {  View } from '../components/Themed';
import ChatList from '../components/ChatList';
import { ScrollView } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
import Colors from '../constants/Colors';
export default function TabTwoScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
   
        <ChatList />
        <FAB
        style={styles.fab}
        small
        icon="android-messages"
        color={Colors.light.background}
        
        />
     
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom:50,
    fontSize:20,
    padding:5,
    backgroundColor:Colors.light.notificationColor
  }
});
