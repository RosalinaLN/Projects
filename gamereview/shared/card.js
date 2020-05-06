import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
}
 
export default Card;

const styles = StyleSheet.create({
    card: {
        marginHorizontal:5,
        marginVertical:8,
        shadowColor: '#333',
        shadowRadius: 2,
        shadowOffset: { width:1, height: 1 },
        shadowOpacity:0.3,
        elevation: 3,
        borderRadius: 6,
        backgroundColor: '#fff'
    },
    cardContent: {
        paddingHorizontal: 15,
        paddingVertical:20
    }
})
