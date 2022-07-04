import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Books = () => {
  return (


    
    <View>
      <View style={styles.Headers}>
<Text style={styles.text}>
  Books
</Text>
      </View>

      <View style={styles.View}>
      <Image style={styles.img}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'}}/>
     

      </View>
      
    </View>
  )
}

export default Books

const styles = StyleSheet.create({
  img:{
    width:250,
    height:250,
    textAlign:'center',
    marginTop:100
  },
  Headers:{
    width:"100%",
    height:60,
    backgroundColor:'#EC9B3B',
    paddingVertical:10
  },
  text:{
    fontSize:30,
    color:'#243A73',
    textAlign:'center'
  },
  View:{
    alignItems:'center'
  }
})