import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FlatButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style = {styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
 
export default FlatButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'maroon', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10,
        padding: 10
    },
    buttonText: {
        color: '#fff',
        fontSize:17,
        textTransform: 'uppercase'
    }
})