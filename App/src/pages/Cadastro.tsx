import React,{Component} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import * as Animatable from 'react-native-animatable';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Cadastro(){
    const navigation = useNavigation();

    function handleS(){
    navigation.navigate('Userident');
    }
    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>
                    Realize seu Cadastro 📋
                </Text>
            </Animatable.View> 
            <ScrollView>
                <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                    <Text style={styles.title}> Nome </Text>
                    <TextInput
                    placeholder="Digite seu nome ..."
                    style={styles.input}
                    />
                    <Text style={styles.title}> Email </Text>
                    <TextInput
                    placeholder="Digite seu email ..."
                    style={styles.input}
                    />
                    <Text style={styles.title}> Data de Nascimento </Text>
                    <TextInput
                    placeholder="Digite sua data de nascimento ..."
                    style={styles.input}
                    />
                    <Text style={styles.title}> Senha </Text>
                    <TextInput
                    placeholder="Digite sua Senha ..."
                    style={styles.input}
                    />
                    <Text style={styles.title}> Confirme sua senha </Text>
                    <TextInput
                    placeholder="Confirme sua senha ..."
                    style={styles.input}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleS}>
                        <Text style={styles.buttonText}> Cadastrar </Text>
                    </TouchableOpacity>
                
                </Animatable.View>
            </ScrollView>


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