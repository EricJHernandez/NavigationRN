import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';


export const Tab1Screen = () => {
	return (
		<View>
			<View>
				<Text style={styles.globalMargin} >Iconos</Text>
				<Icon name="american-football-outline" size={50} color="#900" />
				{/* <ion-icon name="american-football-outline"></ion-icon> */}
			</View>
		</View>
	)
}
