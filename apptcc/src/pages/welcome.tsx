import React from 'react';
import {
    SafeAreaView,
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
    Button,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import colors from '../styles/colors';
import alimeImg from '../teste/alime.png';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('Login');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                NutriPlaj
            </Text>
            <Animatable.Image 
                animation='flipInY'
                source={alimeImg} 
                style={styles.image}
                resizeMode='contain'
            />
            
            <Text style={styles.subtitle}>
                Gerencie, planeje e crie {'\n'}
                a sua dieta de forma {'\n'}
                fácil e rápida . . .
            </Text>

            <TouchableOpacity  
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleStart}>
                <Text style={styles.buttonIcon}>
                ➜ 
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.white,
    },
    title: {
        color: colors.green,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        fontFamily: fonts.heading,


    },
    subtitle:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        color: colors.body_dark,
        fontFamily: fonts.text,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width:56,    
        backgroundColor: '#ff8c00',   
    },
    buttonIcon:{
        fontSize: 24,
        color:colors.blue_light,
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    }
});