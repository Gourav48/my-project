import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Business-to-consumer (B2C) text messaging is growing rapidly. According to Juniper Research, global mobile business messaging traffic hit 2.7 trillion in 2020, up 10% from 2019. Brands are using SMS in various customer communication applications, including marketing messages, customer support, transactional messages, and more</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    view:{
       
        
    
    },
    text:{
        fontSize:20
    }
})