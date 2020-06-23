import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, TextInput, Alert} from 'react-native';
import doctor1 from '../static_files/doctors1.jpg';

//mutation to verify user details.
//doing a mutation.
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

//the mutation.
const validateUserMutation = gql`
      mutation validateLoginUser($input:validateLoginUserInput){
          validateLoginUser(input:$input){
              user{
                  lastName
                  gender
                  notificationToken
              }
          }
       
      }

`;



//the functional component.
export default function VerificationScreen(props) {
        //generating a verification code.
        const vCode = Math.floor(Math.random() * 10000 + 1);
         
    //passing the mutation into the useMutation hook.
    const [validateUser,{data}] = useMutation(validateUserMutation);

    //the function to validate code.
    function validateUserInput(){

           validateUser({variables: {input:{phone:"0558691496", otp:"12345"}}})
           props.navigation.navigate('generalInfoScreen');
    }


    return(
        <View style={myStyles.parentView}>
            <Text style={{fontWeight:'bold', fontSize:25, position:'relative', bottom:10, marginBottom:70}}>
                Verify Pin </Text>
            <Text style={{position:'relative', bottom:60}}>Enter the verification code</Text>
            <Text style={{position:'relative', bottom:55}}>we just sent to your phone</Text>

            <TextInput style={myStyles.textInput} 
                 onTouchStart={()=>Alert.alert(`YOUR VERIFICATION CODE IS ${vCode}`)}/>

            <View style={myStyles.buttonStyle}>
            <Button  title="SUBMIT CODE" onPress={validateUserInput}/>
            </View>

            <Text style={myStyles.resendCode}>Enter Code And Continue !!</Text>
            
        </View>
    )
}




const myStyles = StyleSheet.create({
    parentView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        borderBottomWidth:4,
        borderBottomColor:'black',
        width:200,
        textAlign:'center',
        fontSize:20,
        position:'relative',
        top:-10
    },
    buttonStyle: {
        position:'relative',
        top:40,
        width:200,
        
    },
    resendCode: {
        position: 'relative',
        top:80

    }
})