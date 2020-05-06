import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import HeaderTitle from '../shared/headerTitle';
import HeaderLeft from '../shared/headerLeft';
import HeaderBackground from '../shared/headerBackground';

const Stack = createStackNavigator();

const AboutStack = ({ navigation }) => {
    return (
            <Stack.Navigator 
                screenOptions={{
                    headerBackground: () => <HeaderBackground />,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                  >
                <Stack.Screen  
                    name="About" 
                    component={About}
                    options={{
                        headerTitleAlign: 'center', 
                        headerLeftContainerStyle: {
                          paddingLeft: 20
                        },
                        headerTitle: () => <HeaderTitle title="About Gamezone"/>,
                        headerLeft: () => <HeaderLeft navigation={navigation}/>
                    }}
                    />
            </Stack.Navigator>
    );
}
 
export default AboutStack;