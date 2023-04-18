import React,{useEffect,useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import userImg from '../teste/perfil.png';

export function Header(){
    const navigation = useNavigation();

    function handleArti(){
        navigation.navigate('Art');
    }
    const [userName,setUserName] = useState<string>();
    
    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@apptcc:use'); 
            setUserName (user || '');
        }
        loadStorageUserName();
    },[]);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <TouchableOpacity onPress={handleArti}>  
                <Image source={userImg} style={styles.image} /> 
                <Text style = {styles.textcenter}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
    },
    image:{
        width: 80,
        height: 80, 
    },
    textcenter:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.blue_light,
        textAlign: 'center',
    },
    greeting:{
        fontSize: 25,
        fontFamily: fonts.text,
        color: colors.heading,
    },
    userName:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    },
});