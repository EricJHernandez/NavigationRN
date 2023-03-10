import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContacScreen = () => {

	const { signIn, authState: { isLoggedIn } } = useContext(AuthContext)

	return (
		<View style={styles.globalMargin} >
			<Text style={styles.title} >ContacScreen</Text>
			{
				!isLoggedIn &&
				<Button
					title='SignIn'
					onPress={signIn}
				/>
			}
		</View>
	)
}
