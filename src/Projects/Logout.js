import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Logout = (props) => {
    return (
        
        <View style={{
            flex: 1, margin: 5, width: '100%'
        }} >
        <TouchableOpacity
         onPress={()=>props.navigation.navigate('signup')}>
            <Text>back</Text>
        </TouchableOpacity>
            <Text style={{ fontSize: 13, color: '#000' }}>AFTER SUCCESSFULLY SIGN IN PAGE NAVIGATE TO DASHBOARD</Text>
            <View style={styles.viewstyle}>
                <Text style={styles.textstyle}>DASHBOARD</Text>

                <TouchableOpacity style={styles.buttton}
                onPress={()=>props.navigation.navigate('sign')}>
                <Text style={{fontSize:15,color:'#fff'}}>LOGOUT</Text>

                </TouchableOpacity>
                <View style={styles.user}>
                <Text style={{fontSize:15,color:'#000',fontWeight:'600'}}>USER DETAILS</Text>
                <Text style={{fontSize:12,color:'#000',fontWeight:'500',marginTop:25}}>USER DETAILS SHOULD RENDER HERE</Text>
                </View>
                <View style={styles.information}>
                <Text style={{fontSize:13,color:'#000',fontWeight:'600',marginTop:5}}>INFORMATION DETAILS</Text>
                <Text style={{fontSize:10,color:'#000',fontWeight:'600',
                marginTop:100}}>ADDED INFORMATION SHOULD RENDER HERE AS LIST (USE FLATLIST)WHICH WILL BE SCROLLABLE</Text>
                </View>
               
   

            </View>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({

    viewstyle: {
        width: '95%',
        height: '85%',
        borderWidth: 2,
        borderColor: '#000',
        marginHorizontal: 5,
       



    },
    textstyle: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        textAlign: 'center',
        backgroundColor: '#FFC54D',
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        height:40,
        paddingTop:5
    },
    buttton:{
        backgroundColor:'#000',
        borderWidth:1,
        width:100,
        height:35,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:250,
        margin:10,borderRadius:10
    
      
        
    },
    user:{
        backgroundColor:'#F1F1F1',
        borderWidth:1,
        width:'90%',
        height:80,
        borderColor:'#000',
        marginHorizontal:20,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    information:{
        backgroundColor:'#F1F1F1',
        borderWidth:1,
        width:'90%',
        height:'60%',
        borderColor:'#000',
        marginHorizontal:20,
        justifyContent:'flex-start',
        alignItems:'center',
        margin:10,
        borderEndColor:'grey',borderEndWidth:6,
        
    }



})