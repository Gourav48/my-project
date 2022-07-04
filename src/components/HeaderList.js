import { StyleSheet, Text, View,SectionList } from 'react-native'
import React from 'react'
const Data=[
    {
        title:'Foods',
        data:['burger','pizza','Ristto']
    },
    {
        title:'Vegetables',
        data:['patoto','onin','tomoto']
    },{
        title:'Bakeri',
        data:['Cake','paneer','ice-cream']
    },
]
const ItemView=({item})=>{
    return(
        <View style={styles.view}>
            <Text style={styles.text}>{item}</Text>
        </View>
    )
}
const HeaderList = () => {
  return (
    <View>
      <SectionList 
      sections={Data} 
      keyExtractor={(item,index)=> item+index}
      renderItem={({item})=><ItemView item={item}/>}
      renderSectionHeader={({section})=>(<Text style={styles.title}>{section.title}

      </Text>)}
      />
    </View>
  )
}

export default HeaderList

const styles = StyleSheet.create({
    view:{
        backgroundColor:'#A5BECC',
        marginHorizontal:20,
        margin:20,
        paddingVertical:20

    },
    text:{
        fontSize:20,
        color:'#fff',
        textAlign:'center'

    },title:{
        fontSize:30,
        color:"#7C3E66",
        textAlign:'center'
    }
})