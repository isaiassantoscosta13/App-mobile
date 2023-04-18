import React from "react";
import {View,
        Text,
        StyleSheet,
        ImageBackground,
        FlatList,
        TouchableOpacity,
        ScrollView
    } from 'react-native';

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from '@react-navigation/core';


export function Finance(){
    const navigation = useNavigation();

    return(
       <View style={styles.container}>
            <Text style={styles.tituloText}>
                Relatório financeiro
            </Text>
            
            <View>

            </View>
       </View>

    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      tituloText:{
        color: colors.body_dark,
        fontFamily: fonts.heading,
        fontSize: 25,
      },
});