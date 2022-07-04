import { Text, View,TouchableOpacity ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super()
        this.state={
            count:0
        }
    }
    incrementCount(){
        this.setState({

            count:this.state.count+1
        })
        
    }
    decrementCount(){
        this.setState({

            count:this.state.count-1
        })
        
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterview}>
        <Text style={styles.text}>{this.state.count}</Text>
        </View>
       
        <TouchableOpacity style={styles.plusbutton}
        onPress={()=>this.incrementCount()}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusbutton}
        onPress={()=>this.decrementCount()}>
            <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles=StyleSheet.create({
container:{
    backgroundColor:'#D61C4E',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
},
counterview:{
    backgroundColor:'#000',
    width:200,
    height:100,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
},
text:{
    fontSize:40,
    
    color:'#fff'
},
plusbutton:{
    backgroundColor:'black',
    width:100,
    height:100,
    justifyContent:"center",
    alignItems:"center",
    marginTop:50,
    borderRadius:50
},
minusbutton:{
    backgroundColor:'black',
    width:80,
    height:80,
    justifyContent:"center",
    alignItems:"center",
    marginTop:50,
    borderRadius:50

}



})