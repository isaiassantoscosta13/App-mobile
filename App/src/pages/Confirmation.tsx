import Reat from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('Menu');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>😉📲📋🥗 </Text>
                <Text style={styles.title}>
                    “A qualidade da alimentação é tão importante quanto a quantidade”. {'\n'}
                    – Marianna Moreno 
                </Text>    
                <Text style={styles.subtitle}>
                    Vamos começar a gerenciar a sua dieta ...
                </Text>
                <View style={styles.footer}>
                    <Button
                    title='Começar'
                    activeOpacity={0.7}
                    onPress={handleStart}
                    />
                </View>  
            </View>          
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.white,
    },

    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        padding: 30,
    },

    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
    },

    subtitle:{
        fontFamily: fonts.text,
        textAlign: 'center', 
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading,   
    },

    emoji:{
        fontSize: 100,  
        color: colors.green, 
    },

    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20,
    },
})