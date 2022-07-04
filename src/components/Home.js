import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'


const Home = () => {
  return (
<ScrollView>
    <View style={styles.view}>
        <Image style={styles.img}
         source={{uri:'https://source.unsplash.com/1024x768/?building'}}/>
      <Text style={styles.text}>Image 1</Text>
      <Image style={styles.img}
         source={{uri:'https://source.unsplash.com/1024x768/?weather'}}/>
      <Text style={styles.text}>Image 2</Text>
       <Image style={styles.img}
         source={{uri:'https://source.unsplash.com/1024x768/?forest'}}/>
      <Text style={styles.text}>Image 3</Text>
      <Image style={styles.img}
         source={{uri:'https://source.unsplash.com/1024x768/?water'}}/>
      <Text style={styles.text}>Image 4</Text>
      <Image style={styles.img}
         source={{uri:'https://source.unsplash.com/1024x768/?ice'}}/>
      <Text style={styles.text}>Image 5</Text>
      <Image style={styles.img}
         source={{uri:'https://source.unsplash.com/1024x768/?'}}/>
      <Text style={styles.text}>Image 6</Text>
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    view:{
       marginHorizontal:40,
       paddingVertical:20
     
    },
    text:{
        fontSize:40,
        textAlign:'center',
        marginVertical:10
    },
    img:{
        height:500,
        width:'100%'
    }
})