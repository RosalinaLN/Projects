import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor: '#333'
              }}
            drawerContentOptions={{
                activeTintColor: '#bbb',
                inactiveTintColor: '#fff',
                itemStyle: { marginVertical: 5 },
                labelStyle: { fontSize: 18 } 
              }}
            >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    </NavigationContainer>
)

export default Navigation;