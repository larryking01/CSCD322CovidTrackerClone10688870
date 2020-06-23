import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import vitals1 from '../static_files/vitals1.jpg';
import vitals2 from '../static_files/vitals2.png';

export default function VitalScreen(props) {
    return(
        <View style={myStyles.parentView}>
            <Text style={myStyles.headerText}>Vitals</Text>
            <Image source={vitals1} style={myStyles.picView}></Image>
            <Text style={myStyles.logVital}>Click on 'Log Vitals' to record your vitals </Text>

            <TouchableOpacity style={myStyles.logView} onPress={()=> props.navigation.navigate('logVitals')}>
            <View>
            <Text style={{position:'relative', left:37, top:25}}>Log Vitals </Text>
            </View>
            </TouchableOpacity>

        </View>
    )
}



const myStyles = StyleSheet.create({
    parentView: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        position:'absolute',
        top:30,
        left:20,
        fontSize:30,
        fontWeight:'bold'

    },
    logVital: {
        position:'relative',
        top: 20
    },
    logView: {
        position:'absolute',
        top:350,
        borderWidth:1,
        borderRadius:5,
        width:150,
        height:80,
        textAlign:'center',
        borderStyle:'dashed'
    },
    picView: {
        height:150,
        width: 340,
        position:'absolute',
        top:100,
        left:10
    }

})