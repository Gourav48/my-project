import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RadioButton } from 'react-native-paper';

const SignUp = (props) => {
    const [checked, setChecked] = React.useState('first',);

    return (
        <ScrollView>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('sign')}>
            <Text>back</Text>
        </TouchableOpacity>
        <View
            style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
        
     
            <TouchableOpacity onPress={() => props.navigation.navigate('sign')}>

            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', margin: 10 }}>Sign In Form</Text>
            <View style={styles.viewstyle}>
                <Text style={styles.textstyle}>
                    SIGN IN
                </Text>
                <View
                    style={{
                        marginHorizontal: 16,
                        marginTop: 5,
                        marginVertical: 100,
                    }}
                >


                    <Text style={[styles.text, { marginTop: 5, }]}>
                        USER ID
                    </Text>
                    <TextInput style={styles.textinput}
                        placeholder='should be a number '
                       
                    />

                    <Text style={[styles.text, { marginTop: 5, }]}>
                        NAME
                    </Text>
                    <TextInput style={styles.textinput}
                        placeholder='Name should have min 2 characters'
                    />
                    <Text style={[styles.text, { marginTop: 5, }]}>
                        EMAIL
                    </Text>
                    <TextInput style={styles.textinput}
                        placeholder='Write valid email here'
                    />
                    <Text style=
                        {{ fontSize: 15, marginTop: 20, color: '#000' }}>GENDER</Text>

                    <View style={{ flexDirection: 'row' }}>
                    <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
    
       
      /> 
      <Text style={{fontSize:15,color:'#000',marginTop:5}}>MALE</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
    
       
      /> 
      <Text style={{fontSize:15,color:'#000',marginTop:5}}>FEMALE</Text>
      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
    
       
      /> 
      <Text style={{fontSize:15,color:'#000',marginTop:5}}>OTHERS</Text>

                    </View>
                    <Text style={{fontSize:16,color:'#000'}}>QUALIFICATION</Text>
                    <View>
                        <TextInput style={styles.qyalification}
                            placeholder='SELECT HIGHET QUALIFICATION'
                            placeholderTextColor='#000'
                        />
                        <TextInput  style={styles.qyalification}
                            placeholder='10TH'
                            placeholderTextColor='#000'
                            /> 

                        <TextInput  style={styles.qyalification}
                            placeholder='12TH'
                            placeholderTextColor='#000'
                            />
                             <TextInput  style={styles.qyalification}
                            placeholder='GRADUATION'
                            placeholderTextColor='#000'
                            />
                             <TextInput  style={styles.qyalification}
                            placeholder='POST GRADUATION'
                            placeholderTextColor='#000'
                            />
                    </View>
                    <Text style={{fontSize:16,color:'#000'}} >DATE OF BIRTH</Text>
                  <TextInput style={styles.date}
                    placeholder='DD/MM/YY'
                  />
                    <Text style={{fontSize:16,color:'#000'}} >PASSWORD</Text>
                  <TextInput style={styles.date}
                   placeholderTextColor='#000'
                   placeholder='password'returnKeyType='go'
           secureTextEntry
           autoCorrect={false}
       
                  /> 
                   <Text style={{fontSize:16,color:'#000'}} >CONFIRM PASSWORD</Text>
                  <TextInput style={styles.date}
                    placeholderTextColor='#000'       
                     placeholder='password'returnKeyType='go'
           secureTextEntry
           autoCorrect={false}
       
                  />
                   <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',marginTop:20

                }}>
                    <TouchableOpacity style={styles.touchable} 
                    onPress={()=>props.navigation.navigate('logout')}>
                        <Text style={styles.sign}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                </View>


               
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '95%' }}>
                <TouchableOpacity style={styles.touch}
                    onPress={() => props.navigation.navigate('sign')}>

                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signup}
                    onPress={() => props.navigation.navigate('signup')}>
                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Sign Up</Text>
                </TouchableOpacity>

            </View>
            </View>
            </ScrollView>

       
        )
}

export default SignUp

const styles = StyleSheet.create({

    viewstyle: {
        width: '95%',
        height: '85%',
        borderWidth: 2,
        borderColor: '#000',
        marginHorizontal: 16,



    },
    textstyle: {
        fontSize: 20,
        color: '#000',
        marginTop: 30,
        fontWeight: '700',
        textAlign: 'center',


    },
    view: {
        paddingVertical: 40,
        margin: 30,


    },
    text: {
        fontSize: 15,
        color: '#000',
        fontWeight: '600',
        top: 20,

    },
    textinput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        backgroundColor: '#F1F1F1',
        color: '#000',
        top: 20,
        borderRadius: 10

    },
    password: {
        top: 20,
    },
    touchable: {
        backgroundColor: '#000',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        



    },
    sign: {
        fontSize: 17,
        color: '#fff'
    },
    touch: {
        marginHorizontal: 10,
        width: '50%',
        height: 40,
        borderWidth: 1,
        backgroundColor: '#FFC54D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signup: {
        backgroundColor: '#F1F1F1',
        width: '50%',
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    qyalification:{
        backgroundColor:'#F1F1F1',
        width: '100%',
        height: 35,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,

        color: '#000',
        fontSize:15,
        padding:10
    },
    date:{
        backgroundColor:'#F1F1F1',
        borderWidth:1,
        width: '100%',
        height: 35,
       
        borderColor: '#000',
        padding: 10,
        borderRadius:10,
        fontSize:15,
        padding:10

    }






})