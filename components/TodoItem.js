import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TodoItem=({item,handleDelete})=>{
    return(
        <View style={styles.item}>
            <MaterialIcons onPress={() => handleDelete(item.key)} name='delete' size={23}/>
            <Text style={styles.text}>{item.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin:10,
        padding:20,
        borderWidth:1,
        borderRadius:5,
        borderStyle:'dashed',
        marginRight:20,
        marginLeft:20,
        flexDirection:'row'
      },
      text: {
          fontSize: 18,
          marginLeft:5,
      },
})

export default TodoItem;