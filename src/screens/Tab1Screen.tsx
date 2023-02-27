import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchadelIcon } from '../components/TouchadelIcon';


export const Tab1Screen = () => {
	return (
		<View>
			<Text style={styles.globalMargin} >Iconos</Text>
			<View style={{ display: 'flex', flexDirection: 'row', alignContent: 'space-between' }} >
				<TouchadelIcon iconName="american-football-outline"/>
				<TouchadelIcon iconName="airplane-outline"/>
				<TouchadelIcon iconName="albums-outline"/>
			</View>
		</View>
	)
}

