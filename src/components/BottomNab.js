import * as React from 'react';
import { Text, View ,Image,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent:'flex-start', alignItems: 'center',paddingVertical:20 }}>
    
      <View style={{paddingVertical:30}}>
        <Image style={{height:500,width:500,}}
        source={{uri:'https://source.unsplash.com/1024x768/?weather'}}/>
     
      </View>
      <View style={{paddingVertical:30}}>
        <Image style={{height:500,width:500}}
        source={{uri:'https://source.unsplash.com/1024x768/?good'}}/>
     
      </View>
      <View style={{paddingVertical:30}}>
        <Image style={{height:500,width:500}}
        source={{uri:'https://source.unsplash.com/1024x768/?shiv'}}/>
     
      </View>
    </View>
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About!</Text>
    </View>
  );
}
function Privacy() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Privacy!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
         name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Privacy" component={Privacy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}