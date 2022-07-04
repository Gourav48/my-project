import { Button, StyleSheet, Text, View,Linking ,onclickHandler} from 'react-native'
import React,{useState} from 'react'

const State = () => {
    const [name,setName]=useState('style')
    // const[session,setSession]=useState({Number:6,title:'state'})
    // const[current,setCurrent]=useState(true)

    const onclickHandler = ()=>{
        setName('text style')
        // setSession({Number:7,title:'style'})
        // setCurrent(false)
         
    }
  return (
    <View style={styles.view}>
      <Text style={styles.text}>  {name}</Text>
      {/* <Text style={styles.text}> this is session {session.Number} and about {session.title}</Text>
      <Text style={styles.text}>shri ram   {current}</Text> */}
 <View style={styles.button}>
 <Button
      title='click me'
      onPress={onclickHandler}
      ></Button>
 </View>
    </View>
  )
}

export default State

const styles = StyleSheet.create({
    view:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow',
        borderWidth:10,
        borderColor:'red',
        borderRadius:10,
        width:'100%',
        height:'50%',
        paddingHorizontal:20
    },
    text:{
        fontSize:40,
        color:'#000',
        margin:10
        
        
    },
    button:{
      width:200,
      height:50,
     
    }
})