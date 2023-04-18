import React from "react";
import {View,
        Text,
        StyleSheet,
        FlatList,
        TouchableOpacity,
        ScrollView,
        Linking
    } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Header } from "../components/Header";
import { ButtonLink } from "../components/ButtonLink";

export function Art(){
    const navigation = useNavigation();

    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Header/>
                <Text style={styles.title}> 
                    Notícias, sites ,artigos e trabalhos acadêmicos disponiveis.
                </Text>
                <Text style={styles.subtitle}> 
                    Clique nos links abaixo para fazer a leitura. 
                </Text>
            </View>

            <ScrollView>
                <ButtonLink
                    title="Educação Alimentar e Nutricional"
                    link={'https://www.gov.br/cidadania/pt-br/caisan/educacao-alimentar-e-nutricional#:~:text=Educa%C3%A7%C3%A3o%20Alimentar%20e%20Nutricional%20(EAN,promover%20a%20pr%C3%A1tica%20aut%C3%B4noma%20e'}
                />
                <ButtonLink
                    title="O que é educação alimentar?"
                    link={'https://www.hevoise.com.br/o_que_e_educacao_alimentar.html'}
                />
                <ButtonLink
                    title="SUGESTÕES DE ATIVIDADES
                    DE EDUCAÇÃO ALIMENTAR E
                    NUTRICIONAL"
                    link={'http://www.sgc.goias.gov.br/upload/arquivos/2015-09/cartilha-de-atividades-de-ean.pdf'}
                />
                <ButtonLink
                    title="Consumo alimentar de atletas"
                    link={'https://www.scielo.br/j/rn/a/9L3YSDj3HCfww7TpNcFz5cf/?format=html'}
                />
                <ButtonLink
                    title="Influência da mídia nos hábitos alimentares de crianças"
                    link={'https://www.redalyc.org/pdf/5704/570463811007.pdf'}
                />
                  <ButtonLink
                    title="SUGESTÕES DE ATIVIDADES
                    DE EDUCAÇÃO ALIMENTAR E
                    NUTRICIONAL"
                    link={'http://www.sgc.goias.gov.br/upload/arquivos/2015-09/cartilha-de-atividades-de-ean.pdf'}
                />
                <ButtonLink
                    title="Consumo alimentar de atletas"
                    link={'https://www.scielo.br/j/rn/a/9L3YSDj3HCfww7TpNcFz5cf/?format=html'}
                />
                <ButtonLink
                    title="Influência da mídia nos hábitos alimentares de crianças"
                    link={'https://www.redalyc.org/pdf/5704/570463811007.pdf'}
                />
                  <ButtonLink
                    title="SUGESTÕES DE ATIVIDADES
                    DE EDUCAÇÃO ALIMENTAR E
                    NUTRICIONAL"
                    link={'http://www.sgc.goias.gov.br/upload/arquivos/2015-09/cartilha-de-atividades-de-ean.pdf'}
                />
                <ButtonLink
                    title="Consumo alimentar de atletas"
                    link={'https://www.scielo.br/j/rn/a/9L3YSDj3HCfww7TpNcFz5cf/?format=html'}
                />
                <ButtonLink
                    title="Influência da mídia nos hábitos alimentares de crianças"
                    link={'https://www.redalyc.org/pdf/5704/570463811007.pdf'}
                />
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
    hyperlinkStyle: {
        color: colors.green_dark,
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
});