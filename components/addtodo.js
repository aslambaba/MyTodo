import React, { useRef } from 'react';
import { StyleSheet, View, TextInput, Button,} from 'react-native';


export default function Addtodo({AddHandler}){

    const todo = useRef('');

    const addData = ()=>{
        AddHandler(todo.current.value);
        todo.current.value = '';
    }
    return(
        <View style={Style.InputView}>
            <TextInput ref={todo} style={Style.InputField} placeholder='Add Todo'/>
            <Button style={Style.addbtn} title='Add' onPress={()=> addData()}/>
        </View>
    )
}

const Style = new StyleSheet.create({
    InputView: {
        marginVertical: '20px',
        paddingHorizontal: '40px',
        textAlign: 'center'
    },
    InputField: {
        marginVertical: '5px',
        border: '1px solid black',
        paddingVertical: '10px',
        paddingHorizontal: '10px',
        borderRadius: '1px'
    },
    addbtn: {
        color: '#ee9820',
    }
})