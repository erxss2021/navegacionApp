import React from 'react';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, View, TouchableOpacity, Text } from 'react-native';
// import { DrawerProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { styles } from '../themes/appThemes';
import { createStackNavigator } from '@react-navigation/stack';



const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="StackNavigation" options={{title:'Home'}} component={StackNavigation} />
      <Drawer.Screen name="SettingScreen" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
      <DrawerContentScrollView>
        {/* Parte del avatar */}
        <View style={styles.avatarContainer}>
          <Image 
            source={{
              uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
            }}
            style={styles.avatar}
          />
        </View>

        {/* Opciones de menú */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuBoton}
            onPress={() => navigation.navigate('StackNavigation')}
          >
            <Text style={styles.menuTexto}>Navegación</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.menuBoton}
            onPress={() => navigation.navigate('SettingScreen')}
          >
            <Text style={styles.menuTexto}>Ajustes</Text>
            
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    )
}