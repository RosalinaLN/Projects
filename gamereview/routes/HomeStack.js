import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import HeaderTitle from '../shared/headerTitle';
import HeaderLeft from '../shared/headerLeft';
import HeaderBackground from '../shared/headerBackground';

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
    return (
            <Stack.Navigator 
                screenOptions={{  
                    headerBackground: () => <HeaderBackground />,
                    headerTintColor: '#333', 
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                  >
                <Stack.Screen  
                    name="Home" 
                    component={Home}
                    options={{
                        headerTitleAlign: 'center', 
                        headerLeftContainerStyle: {
                            paddingLeft: 20
                        },
                        headerTitle: () => <HeaderTitle title="Gamezone"/>,
                        headerLeft: () => <HeaderLeft navigation={navigation}/>
                    }}
                    />
                <Stack.Screen 
                    name="ReviewDetails" 
                    component={ReviewDetails} 
                    options={{
                        title: 'Review Details'
                    }}
                    />
            </Stack.Navigator>
    );
}
 
export default HomeStack;