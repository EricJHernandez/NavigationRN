import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';


export const MenuLateralBasico = () => {

    const Drawer = createDrawerNavigator();

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: true  // Oculta la hamburguesa
            }}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'StackNavigator' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'SettingsScreen' }} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}
