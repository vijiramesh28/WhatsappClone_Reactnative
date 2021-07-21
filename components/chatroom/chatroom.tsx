import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { useRoute } from '@react-navigation/core';
import Colors from '../../constants/Colors';
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';

 const ChatRoom = () =>{
  const route = useRoute();
 
    return(
        <View style={{height:'100%' }}>
                <View>
                    <Text style={{fontSize:18, marginTop:10, marginLeft:10}}>Hello</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',width:"90%", height:'8%', borderRadius:20, alignItems:'center',backgroundColor:Colors.light.background, position:'absolute', bottom:0,marginBottom:20, marginLeft:20, paddingHorizontal:5}}>
                <FontAwesome5 name="smile" size={20} color={Colors.light.text}></FontAwesome5>
                   
                        
                    <TextInput
                        style={{
                            
                            height: 40,
                            borderColor:'transparent',
                           paddingLeft:10,
                           fontSize:20
                            }}
                            placeholder="Type a message"
                    />
                   
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Entypo name="attachment" size={20} style={{paddingRight:10}} color={Colors.light.text}></Entypo>
                        <Entypo name="camera" size={20} color={Colors.light.text}></Entypo>
                        
                    </View>
                    <Ionicons name="send" size={20} color={Colors.light.headerColor}></Ionicons>
                </View>
          
        </View>
    )
    
}

// const styles = StyleSheet.create({

// });

export default ChatRoom


