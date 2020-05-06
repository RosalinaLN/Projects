import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Navigation from './routes/drawer';

export default function App() {

  let [fontsLoaded] = useFonts({
    'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf')
  })

  if (!fontsLoaded) {
      return <AppLoading />
  }
  else {
    return (
      <Navigation />
    );
  }
  
}
