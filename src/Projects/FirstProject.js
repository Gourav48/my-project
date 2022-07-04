import { StyleSheet, TextInput,Text, View, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import ForgetPassword from './ForgetPassword'



const FirstProject = (props) => {
    // console.log(props.navigation.navigate)
  return (
   
    <ImageBackground style={styles.backimg}
     source={require("../../task_img.jpg")} resizeMode='contain'>
     <View style={styles.container}>
     
     <Text style={styles.text}>Wellcome</Text>
      <View>
        <TextInput style={styles.textinput}
        placeholder='Email'
        
            
        />
      </View>
      <View>
        <TextInput style={styles.textinput}
        placeholder='password'/>
    </View>
<TouchableOpacity onPress={()=>props.navigation.navigate("forget")}>
     <Text  style={styles.forget}>forget password?</Text>

</TouchableOpacity>
   
    <TouchableOpacity style={styles.touch}
     onPress={()=>{}}>
        <Text style={styles.textstyle}>Login</Text>
    </TouchableOpacity>
<View style={styles.style}>

    <Text style={{fontSize:17,color:'#000'}}>New User Click</Text>
    <TouchableOpacity onPress={()=>props.navigation.navigate('create')}>
    <Text style={{fontSize:17,color:'#18A0FB',marginLeft:5}}>Here to signup</Text>
</TouchableOpacity>
</View>




</View>
  

   
      
      </ImageBackground>
  )
}

export default FirstProject

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
    marginTop:50,
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
    marginTop:20,
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