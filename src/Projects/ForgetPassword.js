import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const ForgetPassword = (props) => {
    // console.log(props.navigation)
    return (
        // <View>
            <ImageBackground style={styles.backimg}
                source={require('../../task_img.jpg')}

            >
                <TouchableOpacity
              onPress={()=>props.navigation.navigate("home")}
                >
                    <Text >back</Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>ForgetPassword</Text>
                    <View>
                        <TextInput style={styles.textinput}
                            placeholder='enter your email'

                        />
                    </View>
                    <TouchableOpacity style={styles.touch}
                        onPress={() => props.navigation.navigate('code')}>
                        <Text style={styles.textstyle}>Get OTP</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:20,marginTop:20,color:'#2FA4FF',
                    fontWeight:'600'}}>Return to login page</Text>

                </View>




            </ImageBackground>
        // </View>

    )
}

export default ForgetPassword

const styles = StyleSheet.create({

    container: {

        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 100

    },
    text: {
        fontSize: 30,
        color: '#2FA4FF',
        fontWeight: 'bold'
    },
    textinput: {
        backgroundColor: '#F1F1F1',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#F1F1F1',
        marginTop: 50,
        width: 300,
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: 'grey',
        shadowColor: '#000',
        shadowRadius: 40,
        elevation: 10

    },
    backimg: {
        flex: 1
    },
    touch: {
        width: 300,
        height: 50,
        backgroundColor: '#18A0FB',
        borderRadius: 40,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#2FA4FF',
        shadowRadius: 40,
        elevation: 20
    },
    textstyle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700'

    },



})