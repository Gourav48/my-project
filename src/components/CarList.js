import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'



const carBrands=[
  {
id:1,
name:'Audi',
price:'5000000'
  },
  {
    id:2,
    name:'BMW',
    price:'4000000'
      },
      {
        id:3,
        name:'Toyota',
        price:'3000000'
          },
          {
            id:4,
            name:'jaquare',
            price:'7000000'
              },
              {
                id:5,
                name:'Rolls royce',
                price:'40000000'
                  },
                  {
                    id:6,
                    name:'Range Rover',
                    price:'4000000'
                      },
                      {
                        id:7,
                        name:'Mercedezs',
                        price:'5000000'
                          },
                          {
                            id:8,
                            name:'Honda',
                            price:'2000000'
                              },
                              
                                                                                      
]
const CarList = () => {
  const ItemView=({item})=>{
    return(
      <View style={styles.view}>
        <Text style={styles.text}> {item.name}</Text>
        <Text style={styles.text}> {item.price}</Text>
      </View>
    )
  }

  return (
    <View>
<FlatList data={carBrands} renderItem={ItemView}
keyExtractor={item=>item.id}
horizontal={false}
showsHorizontalScrollIndicator={false}
numColumns={2}

/>

    </View>
  )
}

export default CarList

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#243A73',
margin:10,
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
  borderRadius:40
    


  },
  text:{
    fontSize:20,
    color:'#fff',
    padding:20
  }
})