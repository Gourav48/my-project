import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const FirstComponent = ({navigation}) => {
  const submitform=()=>{
    navigation.navigate('books')
  }
  return (
    <View style={styles.view}>

    <View style={styles.container} >
      <Image 
      style={styles.img}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'}}/>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Image</Text>
        <Text  style={styles.price} >1000</Text>

     

      </View>
     
    </View>
  <TouchableOpacity style={styles.button}
  onPress={submitform}>
     <Text style={styles.buttontext}> button</Text>
   </TouchableOpacity>
    </View>
   
  )
}

export default FirstComponent

const styles = StyleSheet.create({
    container:{
      
       
       width:250,
       height:320,
       backgroundColor:'#fff',
       elevation:5,
       borderRadius:10

        
        
    },
    img:{
       width:250,
       height:250,
       borderRadius:20
       
    },
    text:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:10
  
    },
    textstyle:{
      fontSize:20,
      color:'#000'
    },
    price:{
      fontSize:20,
      color:'red'
    },
    button:{
    borderWidth:1,
    borderColor:"black",
      backgroundColor:"#F7E2D6",
      marginTop:30,
      width:250,
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center'

    },
    view:{
      justifyContent:'center',
      alignItems:'center',
      margin:20

    },
    buttontext:{
      fontSize:40,
      textAlign:'center'

    }

})