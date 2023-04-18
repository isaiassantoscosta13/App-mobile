import React, {useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/core";


export function Userident(){
    const [isFocused, setIsFocused] = useState(false); 
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleInputBlue(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true)
    }
    
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    async function handleSubmit(){
        if(!name)
            return Alert.alert('Informe seu nome !!!')

        await AsyncStorage.setItem('@apptcc:use',name);

        navigation.navigate('Confirmation');
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView  
            style={styles.container}
            behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>😄</Text>
                                <Text style={styles.title}>
                                Como podemos {'\n'}
                                chamar você ?
                                </Text>
                            </View> 
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && 
                                    {borderColor: '#cd853f'}
                                ]}
                                placeholder='Digite seu nome ...'
                                onBlur={handleInputBlue}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            /> 
                            <View style = {styles.footer}>
                                <Button 
                                    title='Confirmar'
                                    activeOpacity={0.7}
                                    onPress={handleSubmit}
                                    
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.white,
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    header:{
        alignItems: 'center',
    },
    emoji:{
        fontSize: 100,
        color: colors.green,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    },
});