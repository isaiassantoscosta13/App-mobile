import React, { useState } from "react";
import {
    View,
    Alert,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native'; 

import { format, isBefore } from "date-fns";
import DateTimePicker,{Event}  from "@react-native-community/datetimepicker";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import caImg from '../teste/ca.png';

export function RefSave(){
    const [selectedDateTime,setSelectedDateTime] = useState(new Date());
    const [showDatePicker,setShowDatePicker] = useState(Platform.OS == 'ios');

    function handleGhangeTime(event: Event, dateTime: Date | undefined ){
        if(Platform.OS == 'android'){
            setShowDatePicker(oldState => !oldState);
        }
        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏰')
        }
        if(dateTime)
            setSelectedDateTime(dateTime);
          
    }

    function handleOpenDateTimePickerForAndroid(){
        setShowDatePicker (oldState => !oldState);
    }

    return(
        <View style={styles.container}>
            <View style={styles.aliInfo}>
                 <Text style={styles.aliName}>
                    Café da manhã 
                </Text> 
                <Text style={styles.aliAbout}>
                    Quais alimentos devem compor essa refeição tão importante?
                </Text>
                <Image style={styles.imageconfig}
                source={caImg}/>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Text style={styles.tipText}>
                    Frutas, carboidratos (pão, tapioca, cuscuz) fornecem energia 
                    e as proteínas (leite, queijo, ovos) possuem função estrutural. 
                    Essas são combinações perfeitas para iniciar o dia. 
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado ⏰
                </Text>

                {
                showDatePicker && (
                <DateTimePicker
                value={selectedDateTime}
                mode = 'time'
                display="spinner"
                onChange={handleGhangeTime}
                />
                )}

                {
                    Platform.OS == 'android' && (
                        <TouchableOpacity 
                            style={styles.dateTimePickerButton}
                            onPress={handleOpenDateTimePickerForAndroid}
                        >
                            <Text style={styles.dateTimePickerText}>
                                {`Mudar ${format (selectedDateTime, 'HH:mm')}`}
                            </Text>
                        </TouchableOpacity>
                    )
                }

                <Button
                    title="Cadastrar Refeição"
                    onPress={() => {}}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape,
    },
    imageconfig:{
        width:150,
        height:150,
    },
    aliInfo:{
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: colors.green_light,
    },
    controller:{
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20,
    },
    aliName:{
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15,
    },
    aliAbout:{
        textAlign: 'center',
        fontFamily: fonts.text,
        color:  colors.heading,
        fontSize: 17,
        marginTop: 10,
    },
    tipContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        borderRadius: 20,
        position: 'relative',
        bottom: 40,
    },
    tipText:{
        flex: 1,
        margin: 10,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 15,
        textAlign: 'justify',
    },
    alertLabel:{
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5,
    },
    dateTimePickerText:{
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text,
    },
    dateTimePickerButton:{
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    },   
})