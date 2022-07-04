import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const CodeVerification = (props) => {
  return (

   
    <ImageBackground style={styles.imageback}
    source={require('../Images/task_img.jpg')}>
<TouchableOpacity onPress={()=>props.navigation.navigate('forget')}
>
    <Text >back</Text>
</TouchableOpacity>
<View style={styles.container}>  
<Text style={styles.text}>CodeVerification</Text>
<View style={styles.view}>
 <Text style={{fontSize:18}}> please enter the verification code send to : 
  <Text style={{fontSize:18,color:'#000'}} >gouravsahu@newrise.in</Text>
 </Text>
 
</View>
<View>
    <TextInput style={styles.textinput}
    placeholder='Enter 4 digit OTP'

    />
</View>
 <Text style={styles.textstyle}> Re-enter your Email</Text>
 <TouchableOpacity style={styles.touch} 
 onPress={() => props.navigation.navigate('well')}>
    <Text style={styles.textsty}>Next</Text>
 </TouchableOpacity>

 <Text style={{fontSize:22,marginTop:20,fontWeight:'500'}}> Don't recieve an OTP</Text>
 <Text style={{fontSize:20,margin:20,color:'#2FA4FF',fontStyle:'italic',fontWeight:'500'}}> Resend it</Text>
  </View>
  
     
      </ImageBackground>
    
  )
}

export default CodeVerification

const styles = StyleSheet.create({
    imageback:{
        flex:1
    },
    container:{
  
        justifyContent:'flex-start',
        alignItems:'center',
        paddingVertical:100
    
    },
    text:{
        fontSize:30,
        color:'#2FA4FF',
        fontWeight:'bold'},
        view:{
            marginTop:20,
            marginHorizontal:30,
             
          
           
         
        },
        textinput:{
            backgroundColor:'#F1F1F1',
            borderWidth:1,
            borderRadius:30,
            borderColor:'#F1F1F1',
            marginTop:50,
            width:300,
            height:50,
            textAlign:'center',
            fontSize:20,
            fontWeight:'500',
            color:'grey',
            shadowColor:'#000',
            shadowRadius:40,
            elevation:10
              
        },
        textstyle:{
            fontSize:20,
            color:'#2FA4FF',
            marginLeft:150,
            marginTop:20,
            fontWeight:'700'
        },touch:{
            width:300,
            height:60,
            backgroundColor:'#18A0FB',
            borderRadius:40,
            marginTop:20,
            alignItems:'center',
            justifyContent:'center',
            elevation:10,
            shadowColor:'#18A0FB',
            shadowRadius:20
        },
        textsty:{
            fontSize:25,
            color:'#fff',
            fontWeight:'700'
            
        },
})