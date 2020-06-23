import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, TextInput,ScrollView, CheckBox, KeyboardAvoidingView, Alert} from 'react-native';


//the functional component.
export default function ProfileScreen(props) {

    //handling check box
    const[isSelected, setSelection] = useState(false);

    //go to home after profile.
    function gotoHome() {
        Alert.alert('PROFILE UPDATED');
        //this.props.navigation.push('homeScreen')
    }

    return (
       
        <View style={myStyles.parentView}>
        
            <Text style={{position:'absolute', top:10, left: 10, fontWeight:'bold', fontSize:25}}>
                Profile 
            </Text>
            <Text style={{position:'absolute', top:65, left:12, fontWeight:'bold'}}>Personal Details</Text>
            <Text style={{position:'absolute', top:110, left:10, fontWeight:'bold'}}> Enter Age </Text>

            <TextInput placeholder='31' style={myStyles.ageText}/>

            <View style={myStyles.checkBoxView}>
            <View style={myStyles.checkBox}>
            <CheckBox checked = {isSelected} onValueChange={()=> setSelection(!isSelected)}/>
            <Text>Female</Text>
            </View>

            <View style={myStyles.checkBox}>
            <CheckBox />
            <Text>Male</Text>
            </View>
            </View>
            
            <View style={{position:'absolute', top:280, marginHorizontal:20}}>
            <Text style={{fontWeight:'bold'}}>Travel History</Text>
            <Text>Select the last two countries you visited(if applicable)</Text>
            </View>

            <View style={myStyles.countryView}>
                <View style={myStyles.firstBox}> 
                </View>
                <View style={myStyles.secondBox}> 
                </View>

            </View>

            <Text style={{position:'absolute', top:480, left:14, fontWeight:'bold'}}>Medical Professional Information </Text>
            <Text style={{position:'absolute', top:500, left:14}}>Applicable if you are a health worker</Text>

            <View style={{position:'absolute', top:541, width: 80 + '%'}}>
                <Button style={{height:100}} title="Update Profile" 
                color="black" onPress={gotoHome}/>
            </View>
           




        </View>

        
      
        
    )
    
}



const myStyles = StyleSheet.create({
    parentView: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }, 
    ageText: {
        width: 90 + '%',
        borderWidth:0.2,
        borderRadius: 5,
        height: 60,
        textAlign:'center',
        fontSize: 15,
        position:'absolute',
        top:150,
        fontWeight:'bold'
    },
    checkBoxView: {
        flexDirection: 'row',
        position:'absolute',
        top:230,
        left:14,
        justifyContent:'space-between'

    },
    checkBox: {
        flexDirection:'row',
        marginHorizontal:20
    },
    countryView: {
        flexDirection:'row',
        position:'absolute',
        top: 360
    },
    firstBox: {
        borderWidth:1,
        height:100,
        width: 150,
        marginRight:20,
        borderRadius:5

    },
    secondBox: {
        borderWidth:1,
        height:100,
        width: 150,
        borderRadius:5

    }
})