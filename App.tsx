import 'react-native-gesture-handler';

import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigation } from './src/navigation/StackNavigation';
// import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { MenuLateral } from './src/navigation/MenuLateral';


const App = () => {
  return (
    <NavigationContainer>
        {/* <Text>Hola navegación</Text> */}
        {/* <StackNavigation /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
    </NavigationContainer>
    
  )
}

export default App;
