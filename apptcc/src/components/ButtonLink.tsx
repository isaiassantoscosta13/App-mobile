import React from "react";
import { 
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
    Linking
 } from 'react-native';
import fonts from "../styles/fonts";
import colors from "../styles/colors";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    link: Linking;
}

export function ButtonLink({title,link, ...rest}:ButtonProps){
    return(
    
        <TouchableOpacity  
            style={styles.ButtonLink}
            activeOpacity={0.7}
            {...rest}
            onPress={() => {
            Linking.openURL(link);
            }}
            >
            <Text style={styles.hyperlinkStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    hyperlinkStyle: {
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark,
    },
    ButtonLink:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15, 
        marginBottom: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#00ff7f',  
        height: 100,
    },
})