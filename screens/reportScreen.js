import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Alert} from 'react-native';



export default function ReportScreen(props) {
    return(
        <View style={myStyles.parentView}>
            <Text style={{position:'absolute', top:20, left:12, fontWeight:'bold', fontSize:30}}>
                Case Reports</Text>
            <Text>Tap on 'Make Case Report' To Make A Report</Text> 


            <TouchableOpacity onPress={()=>props.navigation.navigate('submitReport')}>
            <View style={myStyles.makeReport}>
                <Text style={{position:'relative', top:20, left:30}}>Make Case Report</Text>
            </View>
            </TouchableOpacity>

            <View style={{position:'absolute', top:480, right:20, width:100}}>
                <Button style={{borderRadius:12}} title='+' color='black' onPress={()=>props.navigation.navigate('submitReport')}/>
            </View>

        </View>
    )
}




const myStyles = StyleSheet.create({
    parentView:{
       flex:1,
       alignItems:'center',
       justifyContent:'center'
    },
    makeReport: {
            borderWidth:1,
            height:70,
            width: 200,
            marginRight:20,
            borderRadius:5,
            borderStyle:'dashed',
            marginTop:20,
            textAlign:'center'
        }
})




