import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import FirstProject from './src/Projects/FirstProject'
import ForgetPassword from './src/Projects/ForgetPassword'
import CreateAccount from './src/Projects/CreateAccount'
import CodeVerification from './src/Projects/CodeVerification'
import Welcome from './src/Projects/Welcome'
import SignIn from './src/Projects/SignIn'
import SignUp from './src/Projects/SignUp'
import Logout from './src/Projects/Logout'



const stack=createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>

<stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
  {/* <stack.Screen name='home'component={FirstProject}/>
  <stack.Screen  name='forget'component={ForgetPassword}/>
  <stack.Screen  name='create'component={CreateAccount}/>
  <stack.Screen  name='code'component={CodeVerification}/>
  <stack.Screen  name='well'component={Welcome}/> */}
  <stack.Screen  name='sign'component={SignIn}/>
  <stack.Screen  name='signup'component={SignUp}/>
  <stack.Screen  name='logout'component={Logout}/>
  
 
 
  
  

</stack.Navigator>

    </NavigationContainer>
  


  )
}

export default App
 
const styles = StyleSheet.create({})
