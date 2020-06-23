import React from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image, Alert} from 'react-native';
import covid1 from '../static_files/covid1.jpg';
import doctors3 from '../static_files/doctors3.png';
import doctors4 from '../static_files/doctors4.jpg';
import covid2 from '../static_files/covid2.jpg';
//importing the date.format library.


//the functional component.
export default function HomeScreen(props) {
    //the date.
    const myDate = new Date()
    const date1 = myDate.toLocaleDateString(" ")
    

    return(
        <View style={myStyles.parentView}>
            <ScrollView>
            <View style={{height:180, position:'absolute', top:30}}>
            
            <ScrollView horizontal>
                <Image source={covid1} style={[myStyles.images, {height:180}]} />
                <Image source={doctors3} style={[myStyles.images, {height:180}]} />
                <Image source={covid2} style={[myStyles.images, {height:180}]} />
            </ScrollView>

            </View>

            <View style={{marginTop:250}}>

                <ScrollView >
                    <Text style={{fontWeight:'bold', fontSize:18, marginLeft:20}}>Ghana's Situation Updates</Text>
                    <Text style={{marginLeft:20}}>Last Updated: {date1}</Text>

                    <View style={{marginTop:30, marginHorizontal:20}}>

                    <Text style={{fontWeight:'bold', fontSize:18}}>Confirmed Covid-19 Cases In Ghana As At {date1} </Text>

                    <Text style={{marginTop:10}}> The number of COVID-19 infections in Ghana has exceeded 13,000,
                        health authorities said Friday, as 274 cases were reported in the last 24 hours. 
                        Confirmed COVID-19 cases stands at 13,203.Health officials said four additional fatalities from the virus were recorded 
                        Friday, taking the nationwide death toll to 70.The number of recovered patients has reached 4,548.The capital of Accra and in Ashanti, 
                        western and central regions are the worst hit areas.
                    </Text>
                    <Text>
                        In the central region, 131 people were detained for violating COVID-19 measures. 
                        The highest death toll on the continent has been reported in Egypt with 2,017 fatalities. 
                        It is followed by South Africa with 1,831 deaths, Algeria with 825, Sudan with 506 and Nigeria with 475. 
                        The countries with the highest number of cases are South Africa with 87,715, Egypt with 52,211, Nigeria with 18,480 and Algeria with 11,504.After originating in Wuhan, 
                        China last December, COVID-19 has spread to at least 188 countries and regions. The pandemic has killed more than 457,300 worldwide, with more than 8.5 million confirmed cases, 
                        while recoveries have surpassed 4.2 million, according to figures compiled by Johns Hopkins University in the US.
                    </Text>
                    
                    </View>
                </ScrollView>
               
            </View>
            </ScrollView>
        </View>
    )
}




const myStyles = StyleSheet.create({
    parentView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    images: {
        borderRadius:10,
        marginHorizontal: 15,
        width:350
    }
})