import { StyleSheet, Text, View,TouchableOpacity,ImageBackground ,TextInput} from 'react-native'
import React from 'react'

const Welcome = (props) => {
  return (
  <ImageBackground style={styles.backimg}
  source={require('../Images/task_img.jpg')}>
    <TouchableOpacity
    onPress={()=>props.navigation.navigate('code')}>
  
        <Text>back</Text>
    </TouchableOpacity>
    <View style={styles.container} >

      <Text style={styles.text}>Welcome mks</Text>
      <Text style={{fontSize:25,color:'#E70404',marginLeft:60,padding:5
      }}>Log Out</Text>



      </View>
      <View>
    <TextInput style={styles.textinput}
    placeholder='some text' />
</View>
  <View>
    <TextInput style={styles.textinput}
    placeholder='some text' />
</View>
  <View>
    <TextInput style={styles.textinput}
    placeholder='some text' />
</View>

<View style={styles.viewstyle}>
    <TextInput style={styles.input}
        placeholder='Enter your plan here'
    />
    <Text style={styles.plus}>+</Text>
</View>
</ImageBackground>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
  
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginLeft:20,
        flexDirection:'row'
    
    
    },
    text:{
        fontSize:30,
        color:'#2FA4FF',
        fontWeight:'bold'
    },
    textinput:{
        backgroundColor:'#F1F1F1',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#F1F1F1',
        margin:20,
        width:330,
        height:45,
        fontSize:20,
        fontWeight:'500',
        color:'grey',
        shadowColor:'#000',
        shadowRadius:40,
        elevation:10,
        marginHorizontal:30,
        paddingStart:25
          
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
     
        
    },
    viewstyle:{
        marginTop:330,
        flexDirection:'row'
         
      

    },
    input:{
       
     
        backgroundColor:'#F1F1F1',
        borderWidth:1,
        borderRadius:20,
        borderColor:'#F1F1F1',
        width:250,
        height:50,
        marginLeft:20,
        fontSize:20,
        paddingLeft:20
        
    },
    plus:{
        fontSize:30,
        color:'#Fff',
        marginLeft:40,
        backgroundColor:'#18A0FB',
        width:40,
        height:40,
        textAlign:'center',
        borderRadius:40,
        
        
      
     
    }

})
