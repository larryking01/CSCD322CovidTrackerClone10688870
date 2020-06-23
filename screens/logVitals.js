import React,{useState} from 'react';
import {View, StyleSheet, Button, Text, TextInput, ScrollView, Alert} from 'react-native';


//the functional component.
export default function LogVitals(props){
    //handling states.
    const [dryCough, setDryCough] = useState('');
    const [tiredness, setTiredness] = useState('');
    const [soreThroat, setSoreThroat] = useState('');
    const [fever, setFever] = useState('');
    const [aches, setAches] = useState('');
    const [shortBreadth, setshortBreadth] = useState('');

    const dcInt = Number.parseInt(dryCough);
    const tdInt = Number.parseInt(tiredness);
    const stInt = Number.parseInt(soreThroat);
    const fvInt = Number.parseInt(fever);
    const acInt = Number.parseInt(aches);
    const sbInt = Number.parseInt(shortBreadth);


    function handleCough(text){
        setDryCough(text)
    }

    function handleTiredness(text){
        setTiredness(text)
    }

    function handlesoreThroat(text){
        setSoreThroat(text)
    }

    function handleFever(text){
        setFever(text)
    }

    function handleAches(text){
        setAches(text)
    }

    function handleshortBreadth(text){
        setshortBreadth(text)
    }

    function goToVitals() {
        if (dryCough.length==0 || tiredness.length==0 || soreThroat.length==0 || fever.length==0 || aches.length==0 || shortBreadth.length==0) {
            Alert.alert('ONE OR MORE FIELDS ARE NULL !!','Please enter data into all the fields to continue')
        }
        else if (dcInt<0 || dcInt > 4) {
            Alert.alert('INVALID INPUT IN DRY COUGH FIELD !!', 'NUMBER SHOULD BE FROM 0 TO 4')
        }
        else if (tdInt<0 || tdInt > 4) {
            Alert.alert('INVALID INPUT IN TIREDNESS FIELD !!', 'NUMBER SHOULD BE FROM 0 TO 4')
        }
        else if (stInt<0 || stInt > 4) {
            Alert.alert('INVALID INPUT IN SORE THROAT FIELD !!', 'NUMBER SHOULD BE FROM 0 TO 4')
        }
        else if (fvInt<0 || fvInt > 4) {
            Alert.alert('INVALID INPUT IN FEVER FIELD !!', 'NUMBER SHOULD BE FROM 0 TO 4')
        }
        else if (acInt<0 || acInt > 4) {
            Alert.alert('INVALID INPUT IN ACHES FIELD !!', 'NUMBER SHOULD BE FROM 0 TO 4')
        }
        else if (sbInt<0 || sbInt > 4) {
            Alert.alert('INVALID INPUT IN SHORTNESS OF BREADTH FIELD !!', 'NUMBER SHOULD BE FROM 0 TO 4')
        }
        else {
        Alert.alert(
            'CONFIRM DETAILS?',
            `A log of your symptoms will be recorded with the following details. Click Confirm to confirm or CANCEL to change.
            \n *Dry Cough: ${dryCough}
            \n *Tiredness: ${tiredness} 
            \n *Sore Throat: ${soreThroat}
            \n *Fever: ${fever}
            \n *Aches: ${aches}
            \n *Breadth Shortness: ${shortBreadth} `,
            [
                {
                    text: 'Confirm',
                    onPress: ()=> {
                        Alert.alert('SUCCESS !!', 'Symptoms reported successfully....')
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
            <ScrollView>
                <Text style={{fontWeight:'bold', fontSize:15, margin:10}}> ENTER A VALUE BETWEEN 0 AND 4 TO RECORD THE SYMPTOM </Text>
                <Text style={{fontWeight:'bold', fontSize:15, margin:10}}>0-Mild  1-Mild  2-Semi  3-High  </Text>
                
                <View style={[myStyles.descriptionView, {marginVertical:10}]}>
                    <Text style={{marginTop:20, fontWeight:'bold'}}>DRY COUGH:</Text>
                    <TextInput style={myStyles.textInput} 
                    onChangeText={handleCough} value={dryCough}></TextInput>
                </View>

                <View style={[myStyles.descriptionView, {marginBottom:10}]}>
                    <Text style={{marginTop:10, fontWeight:'bold'}}>TIREDNESS:</Text>
                    <TextInput style={myStyles.textInput} 
                    onChangeText={handleTiredness} value={tiredness}></TextInput>
                </View>

                <View style={[myStyles.descriptionView, {marginBottom:10}]}>
                    <Text style={{marginTop:10, fontWeight:'bold'}}>SORE THROAT:</Text>
                    <TextInput style={myStyles.textInput}
                    onChangeText={handlesoreThroat} value={soreThroat}></TextInput>
                </View>

                <View style={[myStyles.descriptionView, {marginBottom:10}]}>
                    <Text style={{marginTop:10, fontWeight:'bold'}}> FEVER:</Text>
                    <TextInput style={myStyles.textInput}
                    onChangeText={handleFever} value={fever}></TextInput>
                </View>

                <View style={[myStyles.descriptionView, {marginBottom:10}]}>
                    <Text style={{marginTop:10, fontWeight:'bold'}}> ACHES:</Text>
                    <TextInput style={myStyles.textInput}
                    onChangeText={handleAches} value={aches}></TextInput>
                </View>

                <View style={[myStyles.descriptionView, {marginBottom:10}]}>
                    <Text style={{marginRight:10, marginTop:10, fontWeight:'bold'}}> SHORTNESS OF BREADTH:</Text>
                    <TextInput style={myStyles.textInput}
                    onChangeText={handleshortBreadth} value={shortBreadth}></TextInput>
                </View>

             
            </ScrollView>
            <View style={{marginBottom:40, width:300}}>
            <Button title="LOG SYMPTOMS" onPress={goToVitals}/>
            </View>

        </View>
    )
}






const myStyles = StyleSheet.create({
    parentView: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    header: {
        position:'absolute',
        top:20,
        left:8,
        fontWeight:'bold',
        fontSize:20,
    
    },
    textInput:{
        borderBottomWidth:2,
        width:90
    },
    symptoms:{
       marginRight:20

    },
    descriptionView: {
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    headerMargin: {
        marginTop:10
    }
    
})