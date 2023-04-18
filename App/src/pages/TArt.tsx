import Reat from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function TArt(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('Art');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>📰📚 </Text>
                <ScrollView>
                    <Text style={styles.title}>
                    Todo mundo entende a necessidade de se manter atualizado e bem informado, certo?
                    </Text>    
                    <Text style={styles.subtitle}>
                    Entretanto, o problema é saber onde 
                    exatamente é possível ter acesso às novidades da área e adquirir novos conhecimentos.
                    Uma forma eficiente de fazer isso é acompanhar sites de 
                    Nutrição e planejamento financeiro que estão disponíveis. 
                    Como existe todo tipo de conteúdo na internet,
                    é importante ficar atento às fontes de informação e acessar locais confiáveis. 
                    Pensando nisso, separamos uma lista com sites e artigos de Nutrição para ficar de olho sempre. 
                    Confira!
                    </Text>
                    <View style={styles.footer}>
                        <Button
                        title='Ir para as leituras'
                        activeOpacity={0.7}
                        onPress={handleStart}
                        />
                    </View>  
                </ScrollView>
            </View>          
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
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