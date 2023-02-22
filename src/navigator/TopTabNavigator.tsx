import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContacScreen } from '../screens/ContacScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {

    const { top } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({route}) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                  backgroundColor: colores.primary,
                },
                tabBarStyle: {
                  //en ios es shadowColor:"transparent"
                  shadowColor: 'transparent',
                  elevation: 0,
                },
                tabBarIcon: ({ color }) => {
                  let iconName: string = '';
                  switch (route.name) {
                    case 'Chat':
                      iconName = 'Ch';
                      break;
         
                    case 'Contac':
                      iconName = 'Co';
                      break;
         
                    case 'Album':
                      iconName = 'Al';
                      break;
                  }
                  return <Text style={{color}}>{iconName}</Text>;
                },
              })}
        >
            <Tab.Screen name="Chat" options={{ tabBarLabel: 'Chat' }} component={ChatScreen} />
            <Tab.Screen name="Contac" options={{ tabBarLabel: 'Contac' }}  component={ContacScreen} />
            <Tab.Screen name="Album" options={{ tabBarLabel: 'Album' }}  component={AlbumScreen} />
        </Tab.Navigator >
    );
}