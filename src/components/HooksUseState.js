import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const HooksUseState = () => {
    const[count,setCount]=useState(0)
  return (
    <View style={styles.cantainer}>

      <Text style={styles.textsytle}>{count}</Text>
      <TouchableOpacity style={styles.touch} 
      onPress={()=>setCount(count+1)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} 
      
       onPress={()=>setCount(count-1)}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HooksUseState

const styles = StyleSheet.create({
    cantainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textsytle:{
        fontSize:40,
        color:'#000'
    },
    touch:{
        backgroundColor:'#000',
        borderWidth:1,
        borderRadius:15,
        marginTop:20,
        width:100,
        height:50,
        alignItems:'center'

    },
    text:{
        fontSize:30,
        color:'#fff',
        // textAlign:'center'
    }
})