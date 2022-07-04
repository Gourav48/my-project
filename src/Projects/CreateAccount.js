import { StyleSheet, Text, View,ImageBackground,TouchableOpacity ,TextInput} from 'react-native'
import React from 'react'

const CreateAccount = (props) => {
  return (
    <ImageBackground style={styles.backimg}
    source={require("../../task_img.jpg")} resizeMode='contain'>
     <TouchableOpacity
              onPress={()=>props.navigation.navigate("home")}
                >
                    <Text >Back</Text>
                </TouchableOpacity>
    <View style={styles.container}>
    
    <Text style={styles.text}>Create Account</Text>
     <View>
       <TextInput style={styles.textinput}
       placeholder='Full name'
       
           
       />
     </View>
     <View>
       <TextInput style={styles.textinput}
       placeholder='Email'/>
   </View>
   <View>
       <TextInput style={styles.textinput}
       placeholder='password'/>
   </View>

   <TouchableOpacity style={styles.touch}
    onPress={()=>{}}>
       <Text style={styles.textstyle}>Next</Text>
   </TouchableOpacity>
<View style={styles.style}>

   <Text style={{fontSize:17,color:'#000'}}>Existing User Click</Text>
   
   <Text style={{fontSize:17,color:'#18A0FB',marginLeft:5}}>Here to signup</Text>

</View>




</View>
 

  
     
     </ImageBackground>
 )
}

export default CreateAccount

const styles = StyleSheet.create({
container:{
 
   justifyContent:'flex-start',
   alignItems:'center',
   paddingVertical:100

},
text:{
   fontSize:40,
   color:'#2FA4FF',
   fontWeight:'bold'
},
textinput:{
   backgroundColor:'#F1F1F1',
   borderWidth:1,
   borderRadius:30,
   borderColor:'#F1F1F1',
   marginTop:40,
   width:300,
   height:50,
   textAlign:'center',
   fontSize:25,
   fontWeight:'500',
   color:'grey',
   shadowColor:'#000',
   shadowRadius:40,
   elevation:10
     
},
backimg:{
   flex:1
   // width:'100%',
   // height:'100%',
  
},
// viewstyle:{
//     margin:10,
// marginLeft:20,

forget:{
   fontSize:20,
   color:'#18A0FB',
   marginLeft:150,
   marginTop:20,
   fontStyle:'italic',
   fontWeight:'400'
  
  

},
touch:{
   width:300,
   height:50,
   backgroundColor:'#18A0FB',
   borderRadius:40,
   marginTop:40,
   alignItems:'center',
   justifyContent:'center'
},
textstyle:{
   fontSize:25,
   color:'#fff',
   fontWeight:'700'
   
},
style:{
   flexDirection:'row',
   marginTop:20,

   
}



})