import React from "react";
import {View,
        Text,
        StyleSheet,
        FlatList,
        TouchableOpacity,
        ScrollView
    } from 'react-native';

import { Header } from "../components/Header";
import {EnviromentButton} from '../components/EnviromentButton';
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from '@react-navigation/core';

export function Menu(){
    const navigation = useNavigation();

    function handleArti(){
        navigation.navigate('TArt'); 
    }
    function handleFinance(){
        navigation.navigate('Finance');
    }
    function handleRefSave(){
        navigation.navigate('RefSave');
    }
    function handleAliSave(){
        navigation.navigate('AliSave');
    }

    return(
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Header/>
                <Text style={styles.title}> 
                    Suas refeições durante o dia,
                </Text>
                <Text style={styles.subtitle}> 
                    Altere em qualquer momento.
                </Text>
            </View>
            
            <View>
                <FlatList
                    data = {[1,2,3]}
                    renderItem = {({item}) => (
                        <EnviromentButton 
                        title='refeições' 
                        active
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />  
            </View>

            <ScrollView> 
                <View>
                    <Text style={styles.atividades}> Atividades disponiveis  </Text>
                </View>

                <View style = {styles.layout}>
                    <TouchableOpacity  
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={handleAliSave}>
                        <Text style={styles.text}>Produtos e alimentos</Text>    
                        <Text style={styles.buttonIcon}>
                            🥗
                        </Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity  
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={handleRefSave}>
                        <Text style={styles.text}>Cronograma Checklist</Text>   
                        <Text style={styles.buttonIcon}>
                            ⏰
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={handleFinance}>
                        <Text style={styles.text}>Relatório financeiro</Text> 
                        <Text style={styles.buttonIcon}>
                            📊
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={handleArti}>
                        <Text style={styles.text}>Artigos e Noticias</Text>
                        <Text style={styles.buttonIcon}>
                            📰 
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                        style={styles.button}
                        activeOpacity={0.7}
                        >  
                        <Text style={styles.text}>Opções</Text>
                        <Text style={styles.buttonIcon}>⚙️</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                        style={styles.button}
                        activeOpacity={0.7}
                        >  
                        <Text style={styles.text}>Opções</Text>
                        <Text style={styles.buttonIcon}>⚙️</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: colors.white,

    },
    header:{
        paddingHorizontal: 30,
    },
    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15,
    },
    subtitle:{
        fontSize: 17,
        lineHeight: 20,
        fontFamily: fonts.text,
        color: colors.heading,
    },
    enviromentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 20,
    },
    atividades:{
        fontSize: 17,
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        marginVertical: 10,
        marginHorizontal: 12,
        height: 160,
        width:160,    
        backgroundColor: '#00ff7f',  
    },
    text:{
        fontSize: 22,
        fontFamily: fonts.heading,
        color: colors.heading,
    },
    buttonIcon:{
        fontSize: 70,
    },
    layout:{
        flex: 1,
        flexDirection: 'row', 
        alignContent: 'flex-start', 
        flexWrap: 'wrap',
    },
});