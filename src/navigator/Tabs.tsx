import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTapNavigator } from './TopTabNavigator';


export const Tabs = () => {
	return Platform.OS === 'ios'
		? <TabsIOS />
		: <TabsAndroid />
}

const BottomTabIOS = createBottomTabNavigator();
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
	return (
		<BottomTabAndroid.Navigator
			sceneAnimationEnabled = { true }
			barStyle={{
				backgroundColor: colores.primary
			}}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: colores.primary,
				tabBarStyle: {
					borderTopColor: colores.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15
				},
				tabBarIcon: ({ color }) => {
					let iconName: string = '';
					switch (route.name) {
						case 'Tab1Screen':
							iconName = 'american-football-outline'
							break;

						case 'Tab2Screen':
							iconName = 'american-football-outline'
							break;

						case 'StackNavigator':
							iconName = 'american-football-outline'
							break;
					}
					// return <Text style={{ color }}>{iconName}</Text>
					return <Icon name={ iconName } size={20} color="#FFF" />
				}
			})}
		>
			<BottomTabIOS.Screen name="Tab1Screen" options={{ tabBarLabel: 'Tab1' }} component={Tab1Screen} />
			<BottomTabIOS.Screen name="Tab2Screen" options={{ tabBarLabel: 'Tab2' }} component={TopTapNavigator} />
			<BottomTabIOS.Screen name="StackNavigator" options={{ tabBarLabel: 'Tab3' }} component={StackNavigator} />
		</BottomTabAndroid.Navigator>
	);
}

const TabsIOS = () => {
	return (
		<BottomTabIOS.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: colores.primary,
				tabBarStyle: {
					borderTopColor: colores.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15
				},
				tabBarIcon: ({ color }) => {
					let iconName: string = '';
					switch (route.name) {
						case 'Tab1Screen':
							iconName = 'T1'
							break;

						case 'Tab2Screen':
							iconName = 'T2'
							break;

						case 'StackNavigator':
							iconName = 'ST'
							break;
					}
					return <Text style={{ color }}>{iconName}</Text>
				}
			})}
		>
			<BottomTabIOS.Screen name="Tab1Screen" options={{ tabBarLabel: 'Tab1' }} component={Tab1Screen} />
			<BottomTabIOS.Screen name="Tab2Screen" options={{ tabBarLabel: 'Tab2' }} component={TopTapNavigator} />
			<BottomTabIOS.Screen name="StackNavigator" options={{ tabBarLabel: 'Tab3' }} component={StackNavigator} />
		</BottomTabIOS.Navigator>
	);
}