import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Covid2 from './static_files/covid2.jpg';



//setting apollo up for graphql.
import {ApolloClient} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http'; 

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://signalc.herokuapp.com/GraphQL"
})


//setting up first apollo-client
const client = new ApolloClient({
  cache,
  link
})

 
//importing all the screens.
import VerificationScreen from './screens/verificationScreen';
import WelcomeScreen from './screens/welcomeScreen';
import GeneralInfoScreen from './screens/generalInfoScreen';
import HomeScreen from './screens/homeScreen';
import ReportScreen from './screens/reportScreen';
import CountryStatScreen from './screens/settingsScreen';
import VitalScreen from './screens/vitalScreen';
import ProfileScreen from './screens/profile';
import SubmitReport from './screens/submitReport';
import LogVitals from './screens/logVitals';



//the root component.
export default function App() {

  const RootStack = createStackNavigator();

  const Tabs = createBottomTabNavigator();

//icon component.
function ActionBarIcon() {
  return (
    
    <TouchableOpacity onPress={()=> Alert.alert('No new notifications yet.')}>
    <Image
    source={{uri : 'https://image.shutterstock.com/image-vector/people-icon-600w-522300817.jpg'}}
    style={{ width: 50, height: 50, borderRadius: 40/2, marginRight:30 }} 
    />
    </TouchableOpacity>
  );
}

//tab navigator.
  function TabNavigator() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Report" component={ReportScreen} />
        <Tabs.Screen name="Vitals" component={VitalScreen} />
        <Tabs.Screen name="Country Stats" component={CountryStatScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>
    )
  }

  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="welcomeScreen" component={WelcomeScreen} options={{title:'GETTING STARTED'}} />
        <RootStack.Screen name="verificationScreen" component={VerificationScreen} options={{title:'VERIFY PIN'}} />
        <RootStack.Screen name="profileScreen" component={ProfileScreen} options={{title:'PROFILE'}} />
        <RootStack.Screen name="generalInfoScreen" component={GeneralInfoScreen} options={{title:'COVID19  GEN. INFO'}} />
        <RootStack.Screen name="submitReport" component={SubmitReport} options={{headerTitle:'Make Report'}} />
        <RootStack.Screen name="logVitals" component={LogVitals} options={{headerTitle:'Log Symptoms'}} />
        <RootStack.Screen name="homeScreen" component={TabNavigator} options={{headerTitle:'HOME', headerRight : props => <ActionBarIcon {...props} /> }} />
      </RootStack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
