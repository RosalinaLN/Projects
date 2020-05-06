import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HeaderLeft = ({ navigation }) => {

    const openMenu = () => {
        navigation.toggleDrawer();
    }

    return (
        <View>
            <MaterialIcons name="menu" size={32} color="#333" onPress={openMenu} />    
        </View>
    );
}
 
export default HeaderLeft;