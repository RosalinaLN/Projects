import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HeaderTitle = ({ title }) => {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../assets/game_logo.png')} />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}
 
export default HeaderTitle;

const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    logo: {
        width: 26,
        height: 26,
        marginRight:10
    },
    header: {
        flexDirection:'row'
    }
})