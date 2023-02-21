import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ route, navigation }: Props) => {

	const params = route.params;

	useEffect(() => {
		navigation.setOptions({
			title: params.nombre
		})
	}, [])

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>
				{
					JSON.stringify(params, null, 3)
				}
			</Text>
		</View>
	)
}
