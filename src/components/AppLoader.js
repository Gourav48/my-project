import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native'
import React,{useEffect, useState} from 'react'
import { color } from 'react-native-reanimated'

const AppLoader = () => {
    const[show,setShow]=useState()
    useEffect(()=>{
        setTimeout(()=>{
            setShow(false)

        },5000)
    },[])
  return (
    <View>
        <ActivityIndicator/>
        <ActivityIndicator style={{margin:40}} size='large'color='#7D1E6A' animating={show}/>
        <ActivityIndicator  size='small'color='red'/>
 
    </View>
  )
}

export default AppLoader

const styles = StyleSheet.create({})