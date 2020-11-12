import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

export default function Header({mytodos, RemoveHandler}){
    return(
        <View style={Style.main}>
            <FlatList
                data={mytodos}
                renderItem={({item})=>(
                <TouchableOpacity onPress={()=> RemoveHandler(item.id)}>
                    <Text style={Style.Todo}>{item.task}</Text>
                </TouchableOpacity>
                )}
            />
        </View>
    )
}

const Style = new StyleSheet.create({
    main: {
        paddingHorizontal: '40px',
        textAlign: 'center'
    },
    Todo: {
        marginVertical: '5px',
        paddingVertical: '10px',
        border: '1px solid black',
        borderRadius: '4px',
    }
})