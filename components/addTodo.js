import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTodo = ({handleSubmit}) => {
    const [text,setText] = useState('');

    function handleChange(value) {
        setText(value)
     }

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={handleChange}
            maxLength={50}
            value={text}
            />
            <Button onPress={() => {
                handleSubmit(text),
                setText('')
            }} color='orange' title='add todo'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight:20,
        marginLeft:20,
        marginBottom:10
    },
    input:{
        marginBottom:15,
        borderBottomWidth:1.6,
        padding:10,
        borderStyle:'dotted'
    },
    button: {
        width:50
    }
})

export default AddTodo;