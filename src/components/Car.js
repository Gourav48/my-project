import { Text, View,StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'

export class Car extends Component {
    constructor(){
        super()
        this.state={
            car:'Audi'
        }
    }
  render() {
    return (
      <View>
        <Text style={styles.car}>{this.state.car}</Text>
        <TextInput style={styles.inputtext}
        placeholder='Brand'
        placeholderTextColor={'#ddddd'}
        onChangeText={data=>this.setState({
            car:data
        })}/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    car:{
        fontSize:40,
        color:'#7C3E66',
        textAlign:'center'
      
   

    },
    inputtext:{
        fontSize:30,
        color:'#635666',
        borderWidth:4,
        width:300,
        borderColor:'#635666',
        marginTop:50,
        paddingLeft:20
        

    }
})
export default Car