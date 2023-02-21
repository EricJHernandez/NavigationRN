import React from 'react';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';


export const MenuLateral = () => {

    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();

    // const SettingsStackScreen = () => {
    //     return (
    //         <Stack.Navigator>
    //             <Stack.Screen
    //                 name='SettingsScreen'
    //                 component={ SettingsScreen }
    //             />
    //         </Stack.Navigator>
    //     )
    // }

    const { width, height } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= height ? 'permanent' : 'front',
                headerShown:  width >= height ? false : true  // Oculta la hamburguesa
            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}


const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            <View style={styles.avatarContainer}>
                <Image source={{
                    uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
                }}
                    style={styles.avatar}
                />
            </View>

            <View style={ styles.menuContainer }>
                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ ()=> { navigation.navigate('StackNavigator') } }
                >
                    <Text style={ styles.menuTexto }>Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ ()=> { navigation.navigate('SettingsScreen') } }
                >
                    <Text style={ styles.menuTexto }>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}