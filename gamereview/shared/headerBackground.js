import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const HeaderBackground = () => {
    return (
        <View style={styles.headerBg}>
            <Image source={require('../assets/game_bg.png')} />
        </View>
    );
}
 
export default HeaderBackground;

const styles = StyleSheet.create({
    headerBg: {
        overflow: 'hidden', //add also overflow hidden
        width:'100%',   //add width and height to force it same height as header !
        height:'100%'
    }
})
