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


export function AliSave(){
    const navigation = useNavigation();

    return(
       <View style={styles.container}>
            <Text style={styles.tituloText}>
                Alimentos cadastrados 
            </Text>

            <View style={styles.containerseg}>
                <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
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
      containerseg: {
        flex: 1,
        paddingTop: 22
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
});