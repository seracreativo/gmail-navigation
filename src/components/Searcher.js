import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { font, shadow } from '../styles/globalStyles';

const Searcher = ({ route }) => {
	console.log(route);
	return (
		<View style={[styles.container, shadow.primary]}>
			<MaterialIcons name='menu' size={28} color='black' />
			<Text style={font.body1}>Buscar en el {route?.params?.buscadorText}</Text>
		</View>
	);
};

export default Searcher;

const styles = StyleSheet.create({
	container: {
		borderRadius: 12,

		alignItems: 'center',
		padding: 16,

		gap: 16,
		flexDirection: 'row',
		zIndex: 1,
	},
});
