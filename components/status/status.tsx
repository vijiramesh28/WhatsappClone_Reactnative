import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

const StatusComp = () =>{
    return(
        <View style={styles.statusWrapper}>
            <View>
                <Image source={{uri:'https://randomuser.me/api/portraits/men/73.jpg'}} style={{width:65, height:65, borderRadius:65}}/>
                <View style={styles.statusPlus}><MaterialCommunityIcons name="plus" size={15} color={Colors.light.background}></MaterialCommunityIcons></View>
            </View>
        <View style={styles.statusTextWrapper}>
            <Text style={styles.statusStyle}>My Status</Text>
            <Text style={styles.statusText}>Tap to add status update</Text>
        </View>
    </View>
    )
   
}


const styles = StyleSheet.create({
    statusWrapper:{
        width:'100%',
        position:'absolute',
        paddingTop:10,
        top:0,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20
    },
    statusStyle:{
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:2,
},
statusText:{
    fontSize:18,
},
statusPlus:{
    backgroundColor:Colors.light.notificationColor,
    padding:5,
    borderRadius:15,
    position:'absolute',
    bottom:0,
    right:0,
    borderColor:Colors.light.background,
    borderWidth:2,
   
},
statusTextWrapper:{
    marginLeft:20
}
});
export default StatusComp;