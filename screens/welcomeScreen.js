import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, Image, TextInput, Alert} from 'react-native';
import covid1 from '../static_files/covid1.jpg';

//doing a mutation.
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

//the mutation.
const loginUserMutation = gql`
      mutation loginUser($input:loginUserInput){
          loginUser(input:$input){
              success
              message
          }
      }

`;


//the functional component.
export default function WelcomeScreen(props) {

    //for validation.
    const [phoneNumber, setPhoneNumber] = useState('')

     //executing the mutation
     const [logUser,{data}] = useMutation(loginUserMutation);

     //the function.
     function goToVerify(){
         //validating phone number.
         if (phoneNumber.length == 0){
            Alert.alert('NO PHONE NUMBER ENTERED !!', 
            'ENTER A VALID PHONE NUMBER OF TEN DIGITS TO CONTINUE')
         }
         else if (phoneNumber.length < 10){
            Alert.alert('INVALID PHONE NUMBER ENTERED !!', 
            'ENTER A VALID PHONE NUMBER OF TEN DIGITS TO CONTINUE')
         }
         else if (phoneNumber.length > 0 && phoneNumber.length < 11) {
              //executing the mutation.
            logUser({variables: {input: {phone:"0558691496"}}})
            props.navigation.navigate('verificationScreen');
         }
         else {
             Alert.alert('INVALID PHONE NUMBER !!', 'ENTER A VALID PHONE NUMBER OF TEN DIGITS TO CONTINUE')
         }

           
     }
 
    
    return(
        <View style={myStyles.parentView}>
            <Image source={covid1} style={{flex:1, width: 100 + '%'}} />
            <Text style={{fontWeight:'bold',color:'white', fontSize:40, position:'absolute', top:100}}>
                COVERS</Text>
            <Text style={{position:'absolute', top:160, fontSize:13, color:'white'}}>
                (COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
            <Text style={{position:'absolute', top:200, left:10, fontSize:10, color:'white'}}>
                Join the effort by well-meaning Africans using technology to slow down
                and eventually halt the spread of COVID-19
            </Text>

            <TextInput style={myStyles.textInput} placeholder="PHONE NUMBER"
            onChangeText={(text)=>setPhoneNumber(text)} value={phoneNumber}></TextInput>
            <View style={myStyles.buttonStyle}>
            <Button  title="GET STARTED" onPress={goToVerify}/>
            </View>
        </View>
    )
}




const myStyles = StyleSheet.create({
    parentView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    coversText: {
        position:'relative',
        bottom:300
    },
    textInput: {
        borderBottomWidth:5,
        borderBottomColor:'white',
        position:'absolute',
        top:280,
        width:200,
        textAlign:'center',
        color:'white'
    },
    buttonStyle: {
        position:'absolute',
        top:350,
        width: 200
        
    }


})