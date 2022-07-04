import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'

import React from 'react'

const Scrollview = () => {
    const Scrolldata=[
        {

pic:'https://source.unsplash.com/1024x768/?cats',
title:'cats'

    },
    {

        pic:'https://source.unsplash.com/1024x768/?dog',
        title:'dog'
        
            },
        
            {

                pic:'https://source.unsplash.com/1024x768/?boys',
                title:'boys'
                
                    },
                    {

                        pic:'https://source.unsplash.com/1024x768/?girls',
                        title:'girls'
                        
                            },
                            {

                                pic:'https://source.unsplash.com/1024x768/?cow',
                                title:'cow'
                                
                                    },
                                    {

                                        pic:'https://source.unsplash.com/1024x768/?lion',
                                        title:'lion'
                                        
                                            }, {

                                                pic:'https://source.unsplash.com/1024x768/?flowers',
                                                title:'flowers'
                                                
                                                    },
                        ]
  return (

    <ScrollView>
    {Scrolldata.map((item=>
    <View>

<Image style={styles.img}
     source={{uri:`${item.pic}`}}/>
     <Text style={styles.text}>{item.title}</Text>
    
    </View>
    
        
    ))}
    </ScrollView>
  )
}

export default Scrollview

const styles = StyleSheet.create({
    img:{
        height:300,
        width:300,
        marginHorizontal:40,
        borderRadius:20

    
      
       
    },
    text:{
        fontSize:20,
        color:'#FF9F29',
        margin:20,
        textAlign:"center"
    }
})