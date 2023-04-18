import React, {Component,useState} from "react";
import {Text,
        View, 
        StyleSheet, 
        TextInput, 
        TouchableOpacity, 
        SafeAreaView, 
        KeyboardAvoidingView, 
        TouchableWithoutFeedback,
        Platform,
        Keyboard,
        ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import * as Animatable from 'react-native-animatable';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Login(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('Cadastro');
    }
    function handleS(){
        navigation.navigate('Menu');
    }
    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message} >
                    Seja Bem-Vindo (a)
                </Text>
            </Animatable.View> 
        
            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}> Email </Text>
                <TextInput
                style={styles.input}
                placeholder='Digite seu email ...'
                />
                    <Text style={styles.title}> 
                        Senha 
                    </Text>
                <TextInput
                style={styles.input}
                placeholder='Digite sua senha ...'
                />
                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7} 
                    onPress={handleS}
                >
                    <Text style={styles.buttonText}> 
                        Acessar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonRegister} 
                    activeOpacity={0.7} 
                    onPress={handleStart}
                >
                    <Text style={styles.RegisterText}> 
                        Não possui uma conta? Cadrastre-se. 
                    </Text>
                </TouchableOpacity>

            </Animatable.View>
                           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ff8c00',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',    
    },
    containerForm:{
        backgroundColor: colors.white,
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title:{
        fontSize: 15,
        margin: 28,
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        color: colors.blue,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#ff8c00',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,   
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    buttonText:{
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    RegisterText:{
        color: '#b0c4de',
        fontWeight: 'bold',
        fontSize: 16,
    },
});