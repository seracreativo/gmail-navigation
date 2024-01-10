import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color, shadow } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const Filter = ({ route }) => {
	const { setParams } = useNavigation();
	const changeFilter = (active) => {
		setParams({
			filterName: active,
		});
	};
	const Filter = ({ props }) => {
		if (route?.params?.filterName == props.name) {
			return (
				<Pressable style={styles.active}>
					<MaterialIcons name={props?.icon} size={28} color='gray' />
				</Pressable>
			);
		} else {
			return (
				<Pressable
					style={styles.inactive}
					onPress={() => changeFilter(props.name)}
				>
					<MaterialIcons name={props?.icon} size={28} color='gray' />
				</Pressable>
			);
		}
	};
	return (
		<View style={styles.container}>
			<View style={[styles.content, shadow.primary]}>
				{route?.params?.filter.map((item) => (
					<Filter key={item.name} props={item} />
				))}
			</View>
			<View style={[styles.content, shadow.primary, { aspectRatio: 1 }]}>
				<MaterialCommunityIcons
					name='message-plus-outline'
					size={32}
					color={color.primary}
				/>
			</View>
		</View>
	);
};

export default Filter;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 16,
		marginBottom: 16,
		justifyContent: 'center',
	},
	content: {
		padding: 8,
		flexDirection: 'row',
		gap: 0,
		borderRadius: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	active: {
		padding: 12,
		backgroundColor: color.selectBG,
		borderRadius: '100%',
	},
	inactive: {
		padding: 12,
	},
});
