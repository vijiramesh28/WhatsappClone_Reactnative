import { Feather,MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';
import Colors from "../../constants/Colors";
const Calls = () =>{
    return(
        <View style={styles.CallsWrapper}>
            <View style={styles.CallWrapperLeft}>
            
                <View>
                    <Image source={{uri:'http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg'}} style={{width:50, height:50, borderRadius:50}}/>
                </View>
                <View style={styles.CallsTextWrapper}>
                    <Text style={styles.callsUsername}>Lara</Text>
                    <Text><Feather name="arrow-down-left" size={16} color={Colors.light.incomming}></Feather>Yesterday, 10:30PM</Text>
                </View>
                
            </View>
            <View style={styles.CallsWrapperRight}>
                <MaterialIcons name="call" size={30} color={Colors.light.notificationColor}></MaterialIcons>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CallsWrapper:{
        flexDirection:'row',
        alignItems:'center',
        width:"100%",
        paddingLeft:20,

    },
    callsUsername:{
        fontSize:20,
        fontWeight:'bold'
    },
    CallsTextWrapper:{
        paddingLeft:20
    },
    CallWrapperLeft:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    CallsWrapperRight:{
        paddingRight:30
    }
});
export default Calls;