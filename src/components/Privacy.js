import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Privacy = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Move Fast and Don't Break Privacy
Personally Identifiable Information (PII) is a fundamental part of how your customers use products, so you need an efficient way to manage it without putting the data at risk. This requires you to re-think how your PII data is stored and used. 

Enter Skyflow: protect your sensitive data without losing its utility. Sign up for a demo to learn how Skyflow is different.</Text>
    </View>
  )
}

export default Privacy

const styles = StyleSheet.create({


    view:{
        
        
    },
    text:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    }
})