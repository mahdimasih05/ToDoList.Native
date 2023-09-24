import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My ToDo's</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:70,
        marginBottom:10,
        paddingTop:15,
        backgroundColor:'orange',
    },
    title: {
        color:'white',
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center'
    }
})

export default Header;