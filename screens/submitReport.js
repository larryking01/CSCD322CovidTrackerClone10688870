import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, TextInput, Alert} from 'react-native';



//the functional component.
export default function SubmitReport(props) {
    const [digitalAddress, setDigitalAdress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState(''); 

    function handleLocation(text) {
        setDigitalAdress(text)
    }

    function handleLandmark (text){
        setLandmark(text)
    }

    function handleContact (text) {
        setContact(text)
    }

    function handleDescription (text) {
        setDescription(text)
    }


    function goToReport() {
       if (digitalAddress.length==0 || landmark.length==0 || contact.length==0 || description.length==0 ) {
           Alert.alert('ONE OR MORE FIELDS ARE NULL !!','Please enter data into all the fields to continue')
       }
       else {
       Alert.alert(
           'CONFIRM DETAILS?',
           `A report will be made with the following details. Click Confirm to confirm or CANCEL to change.
           \n *Location: ${digitalAddress}
           \n *Nearest Landmark: ${landmark} 
           \n *Alternate Contact: ${contact}
           \n *Description: ${description} `,
           [
               {
                   text: 'Confirm',
                   onPress: ()=> {
                       Alert.alert('SUCCESS !!', 'Case reported successfully....')
                       props.navigation.navigate('homeScreen')
                    }
               },
               {
                   text: 'Cancel',
                   onPress: ()=> {
                    Alert.alert('UNSUCCESSFUL !!', 'Case not reported....')
                       props.navigation.navigate('homeScreen')
                    }
               }
           ],
           {cancelable:false}
       )
        
       }
    }

    return (
        <View style={myStyles.parentView}>
            <Text style={{fontWeight:'bold', fontSize:20, position:'absolute', top:20, left:25}}>
                Who are you reporting?</Text>

            <View style={myStyles.radioButtonsView}> 
            <Text>Self</Text>
            <Text>Other Individual</Text>
            </View>
            
            <Text style={{fontWeight:'bold', fontSize:20, position:'absolute', top:120, left:25}}>
                Location Or Digital Address
            </Text>

            <TextInput style={myStyles.textinput} placeholder='eg.GA-492-74' 
                       onChangeText={handleLocation} value={digitalAddress}/>
           
            <Text style={myStyles.nlmark}>Nearest Landmark</Text>
            <Text style={myStyles.alCon}>Alternate Contact</Text>

          
            <TextInput style={myStyles.landmarkInput} placeholder='eg. Goil Fuel Station'
                 onChangeText={setLandmark} value={landmark}/>
            <TextInput style={myStyles.landmarkInput1} placeholder='eg. 0203548795'
                onChangeText={handleContact} value={contact}/>
          
            <Text style={{position:'absolute', top:400, left:25, fontWeight:'bold'}}>Description</Text>
            <TextInput style={myStyles.typeSth} placeholder='Type Something' 
                onChangeText={handleDescription} value={description}/>

            <View style={{position:'absolute', top:550, left:26, borderRadius:5, width:290, marginRight:40}}>
                <Button title='Report Case' color='black' onPress={goToReport}/>
            </View>


        </View>
    )

}




//the styleSheet object.
const myStyles = StyleSheet.create({
    parentView: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    radioButtonsView: {
        position:'absolute',
        top:60,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    textinput: {
         borderWidth:1,
         borderRadius:5,
         width:290,
         height:60,
         textAlign:'center',
         position:'absolute',
         top:180,
         left:25
    },
    landmarkInput: {
        position:'absolute',
        top:320,
        left:25,
        width:160,
        height:50,
        textAlign:'center',
        borderWidth:1,
        borderRadius:5,
        
    },
    landmarkInput1: {
        position:'absolute',
        top:320,
        right:30,
        borderWidth:1,
        borderRadius:5,
        width:125,
        height:50,
        textAlign:'center'
    },
    infoView:{
        flexDirection:'row'
    },
    typeSth: {
        borderWidth:1,
         borderRadius:5,
         width:290,
         height:60,
         textAlign:'center',
         position:'absolute',
         top:440,
         left:25
    },
    nlmark: {
        position:'absolute',
        top:285,
        left:25,
        fontWeight:"bold"
    },
    alCon: {
        position:'absolute',
        top:285,
        right:33,
        fontWeight:'bold'
    }
})