import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Header(){
    return(
        <View style={Style.header}>
            <Text style={Style.heading}> My Todo </Text>
        </View>
    )
}

const Style = new StyleSheet.create({
    header: {
        textAlign: 'center',
        paddingVertical: '15px',
        width: '100%',
        backgroundColor: '#ee9820',
    },
    heading: {
        fontSize: '14px',
        color: '#fff',
        fontWeight: 'bold',
    }
})