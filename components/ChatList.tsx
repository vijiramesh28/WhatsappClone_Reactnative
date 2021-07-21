import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import  UserData  from './Userdata/UserData';
const ChatList = () =>{
const navigation = useNavigation()

    return(
       
        <View style={styles.chatContainer}>
            {
                UserData.map((data,id)=>{
                    return(
                        <>
                        <TouchableOpacity   onPress={()=>navigation.navigate('ChatRoom', {data:data})}>
                      
                        <View key={data.id} style={styles.separator}>

                            <View style={styles.chatFirst}>

                   
                        
                            <View style={styles.userImgSize}>
                                <Image source={{uri:data.UserImg}} style={{width:'100%', height:'100%', borderRadius:50}} />
                            </View>
                        
                        
                             <View>
                            <View style={styles.userNameWrapper}>
                                <Text style={styles.usernameStyle}>{data.UserName}</Text>
                                <Text style={styles.messageStyle}>{data.Message}</Text>
                            </View>
                            </View>
                        </View>
                        <View style={styles.timeStyle}>
                            <Text>Yesterday</Text>
                        </View>
                      
                    </View>
                    </TouchableOpacity>
                    </>
                    )
                })
            }
        
        </View>
    )
}


const styles = StyleSheet.create({
    chatContainer:{
        flex:1,
        width:'100%',
        paddingTop:5
    },
  
    userImgSize:{
        width:50,
        height:50,
    },
    userNameWrapper:{
        padding:10,
        
    },
    usernameStyle:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom:2,
        
    },
    messageStyle:{
        
        fontSize:18,

    },
    separator: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        
      },
      timeStyle:{
          paddingTop:5,
          justifyContent:'flex-end'
      },
      chatFirst:{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-around',
      }
});
export default ChatList