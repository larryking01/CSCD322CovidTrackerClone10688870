import React from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';

//the functional component.
export default function GeneralInfoScreen(props) {
    return(
        <View style={myStyles.parentView}>
            <ScrollView style={{marginTop:50}}>
                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>WHAT IS COVID19?</Text>
                <Text>Coronaviruses are a large group of viruses that are common among animals. 
                      In rare cases, they are what scientists call zoonotic, meaning they can be transmitted from animals to humans, 
                      according to the US Centers for Disease Control and Prevention. It is a dangerous diseases with incubation period between 4-6 days.
                      It is fatal especially for those with weakened immune system, the elderly and the very young. It could also result in Pneumonia and bronchitis.

                </Text>
                </View>

                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>BACKGROUND OF COVID19 IN GHANA</Text>
                <Text>The COVID-19 pandemic in Ghana is part of the worldwide pandemic of coronavirus disease 2019 (COVID-19),
                     caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
                     The first two cases in Ghana were confirmed on 12 March 2020, when two infected people returned from Norway and Turkey.
                </Text>
                </View>

                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>How Does The Covid19 Virus Spread?</Text>
                <Text>The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing),
                     and touching surfaces contaminated with the virus. 
                     The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it.
                </Text>
                </View>

                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>What Are The Sypmtoms Of Coronavirus?</Text>
                <Text>Symptoms can include fever, cough and shortness of breath. In more severe cases, infection can cause pneumonia or breathing difficulties.
                     More rarely, the disease can be fatal. These symptoms are similar to the flu (influenza) or the common cold, which are a lot more common than COVID-19. 
                     This is why testing is required to confirm if someone has COVID-19. It’s important to remember that key prevention measures are the same – frequent hand washing, 
                     and respiratory hygiene (cover your cough or sneeze with a flexed elbow or tissue, then throw away the tissue into a closed bin). Also, there is a vaccine for the flu – so remember 
                     to keep yourself and your child up to date with vaccinations. 
                </Text>
                </View>

                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>How can I avoid the risk of infection?</Text>
                <Text>Here are four precautions you and your family can take to avoid infection:
                    1. Wash your hands frequently using soap and water or an alcohol-based hand rub 
                    2. Cover your mouth and nose with a flexed elbow or tissue, when coughing or sneezing, and throw away the tissue into a closed bin
                    3. Avoid close contact with anyone who has cold or flu-like symptoms
                    4. Go to the doctor if you have a fever, cough or feel that it is difficult to breathe
                </Text>
                </View>

                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>Is there a treatment for Covid19?</Text>
                <Text>There is no specific treatment. Most of the time, symptoms will go away on their own.
                      Doctors can relieve symptoms by prescribing a pain or fever medication.A room humidifier or a hot shower can help with a sore throat or cough.
                      Drink plenty of fluidsGet rest and sleep as much as possible.If symptoms feel worse than a standard cold, see your doctor.
                </Text>
                </View>

                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>Should I wear a medical mask?</Text>
                <Text>The use of a medical mask is advised if you have respiratory symptoms (coughing or sneezing) to protect others. 
                      If you don’t have any symptoms, then there is no need to wear a mask. If masks are worn, 
                      they must be used and disposed of properly to ensure their effectiveness and to avoid any increased risk of transmitting the virus. 
                      The use of a mask alone is not enough to stop infections and must be combined with frequent hand washing, covering sneezes and coughs, and 
                      avoiding close contact with anyone with cold or flu-like symptoms (coughing, sneezing, fever).
                </Text>
                </View>


                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>Does COVID-19 affect children?</Text>
                <Text>This is a new virus and we do not know enough yet about how it affects children or pregnant women.
                      We know it is possible for people of any age to be infected with the virus, but so far there have been relatively few cases of COVID-19 reported among children.
                      The virus is fatal in rare cases, so far mainly among older people with pre-existing medical conditions.
                </Text>
                </View>


                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>What should I do if my child has symptoms of COVID-19?</Text>
                <Text>Seek medical attention, but remember that it’s flu season in the Northern Hemisphere, 
                    and symptoms of COVID-19 such as cough or fever can be similar to those of the flu, or the common cold – which are a lot more frequent.
                    Continue to follow good hand and respiratory hygiene practices like regular handwashing, and keep your child up to date with vaccinations
                    – so that your child is protected against other viruses and bacteria causing diseases. 
                    As with other respiratory infections like the flu, seek care early if you or your child are having symptoms, 
                    and try to avoid going to public places (workplace, schools, public transport), to prevent spread to others.
                </Text>
                </View>


                <View style={myStyles.viewsMargin}>
                <Text style={myStyles.headers}>What should I do if a family member displays symptoms? </Text>
                <Text>You should seek medical care early if you or your child has a fever, cough or difficulty breathing.
                      Consider calling ahead to tell your health care provider if you have traveled to an area where COVID-19 has been reported, 
                      or if you have been in close contact with someone with who has traveled from one of these areas and has respiratory symptoms.
                </Text>
                </View>
            </ScrollView>

            <View>
                <Button title="Let's Get Started" onPress={()=>props.navigation.push('homeScreen')}/>
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
    headers: {
        fontWeight:'bold',
        fontSize: 17
    },
    viewsMargin: {
        marginHorizontal:20,
        marginVertical:10
    }
})