import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignIn = (props) => {
    return (
        <View
            style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                 
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Sign In Form</Text>
            <View style={styles.viewstyle}>
                <Text style={styles.textstyle}>
                    SIGN IN
                </Text>
                <View 
                style={{
                    marginHorizontal:16,
                    marginTop:10,
                    marginVertical:100,
                }}
                >
              
                    <Text style={[styles.text,{marginTop:20,}]}>
                        EMAIL ADDRESS
                    </Text>
                    <TextInput style={styles.textinput}
                        placeholder='Write Email Here'
                    />
                    
                        <Text style={[styles.text,{marginTop:20,}]}>
                            PASSWORD
                        </Text>
                        <TextInput style={styles.textinput}
                            placeholder='Write Password Here'
                        />
                        </View>
                
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
 
                }}>
                    <TouchableOpacity style={styles.touchable}
                    onPress={()=>props.navigation.navigate('logout')}>
                        <Text style={styles.sign}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '95%'}}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signup}
                onPress={()=>props.navigation.navigate('signup')}>
                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Sign Up</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({

    viewstyle: {
        width: '95%',
        height: '80%',
        borderWidth: 2,
        borderColor: '#000',
        marginHorizontal:16,
        


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
        top:20,

    },
    textinput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        backgroundColor: '#F1F1F1',
        color: '#000',
        top:20,
        borderRadius:10

    },
    password: {
        top:20,
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
        fontSize: 20,
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
        marginRight:10
    }

})